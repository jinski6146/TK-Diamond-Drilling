import express from "express"

const PORT = process.env.PORT || 3000;
app.use('/index', index.html);
app.use('/about', about.html);
app.use('/contact', contact.html);
app.listen(PORT, 'localhost');