import express from "express";

const app = express();

// test API
app.get("/helloworld", (_req, res) => {
    res.status(200).json({
        message: "Hello world from CourseCompass."
    });
});

export default app;
