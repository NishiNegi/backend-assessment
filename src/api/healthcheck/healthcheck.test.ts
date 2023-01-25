import axios from "axios";

describe("healthcheck", () => {
  test("HTTP server call works", async () => {
    // Arrange
    const endpoint = "http://localhost:8080/api/healthcheck";
    // Act
    const response = await axios.get(endpoint);
    // Assert
    expect(response.status).toEqual(200);
  });
});
