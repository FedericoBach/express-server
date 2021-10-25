const app = require("../app")
const request = require("supertest")

describe("GET /books", () => {
    test("Should respond with a 302 status code", async () => {
        const response = await request(app).get("/books").send()

        expect(response.status).toBe(302)
    })
})

describe("POST /login/lector", () => {
    test("Should respond with a 200 status code", async() => {
        const response = await request(app).post("/signin/lector").send({
            email: "pdtc_lector_hashed@gmail.com",
            password: "pdtc"
        })

        expect(response.status).toBe(200)
    })
})