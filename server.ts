import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5001;
const SECRET_KEY = 'elita-inex-secret';
const DB_PATH = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json());

// Helper to read users
const readUsers = () => {
    if (!fs.existsSync(DB_PATH)) return [];
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data || '[]');
};

// Helper to write users
const writeUsers = (users: any[]) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
};

// Register endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const users = readUsers();

        if (users.find((u: any) => u.email === email)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: Date.now(), fullName, email, password: hashedPassword };

        users.push(newUser);
        writeUsers(users);

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({ token, user: { fullName, email } });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = readUsers();
        const user = users.find((u: any) => u.email === email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token, user: { fullName: user.fullName, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
