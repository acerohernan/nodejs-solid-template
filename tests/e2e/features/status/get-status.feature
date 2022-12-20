Feature: Get Status
    In order to see the status of the server

    Scenario: A valid request
        Given I send a GET request to "/status"
        Then the response status code should be 200