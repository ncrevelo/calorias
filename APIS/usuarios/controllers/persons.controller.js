// persons.controller.js
const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowPersons = async (req = request, res = response) => {
    const persons = await prisma.persons.findMany()
        .catch(err => {
            return res.status(500).json({ error: err.message });
        }).finally(async () => {
            await prisma.$disconnect();
        });

    res.json({ persons });
};

const AddPersons = async (req = request, res = response) => {
    const { name, lastName, age, weight, height, userID } = req.body;

    const result = await prisma.persons.create({
        data: { name, lastName, age, weight, height, userID }
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({ result });
};

const ShowPerson = async (req = request, res = response) => {
    const { id } = req.params;

    const person = await prisma.persons.findUnique({
        where: { id: Number(id) }
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({ person });
};

const EditPersons = async (req = request, res = response) => {
    const { id } = req.params;
    const { name, lastName, age, weight, height } = req.body;

    const result = await prisma.persons.update({
        where: { id: Number(id) },
        data: { name, lastName, age, weight, height }
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({ result });
};

const DeletePersons = async (req = request, res = response) => {
    const { id } = req.params;

    const result = await prisma.persons.delete({
        where: { id: Number(id) }
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({ result });
};

module.exports = {
    AddPersons,
    ShowPersons,
    ShowPerson,
    EditPersons,
    DeletePersons
};
