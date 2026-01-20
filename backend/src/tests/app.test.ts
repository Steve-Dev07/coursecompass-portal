import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("Test app.ts API", () => {
    describe("HTTP GET /helloworld", () => {
        test("should return default message JSON", async() => {
            const res = await request(app).get("/helloworld");

            expect(res.status).toEqual(200);
            expect(res.body).toEqual({ message: "Hello world from CourseCompass." });
        });
    });
});
