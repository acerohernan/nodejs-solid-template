Feature: Create User
    In order to have users in the platform

    Scenario: A valid request
        Given I send a POST request to "/user" with body:
        """
        {
            "name": "Hernan"
        }
        """
        Then the response status code should be 201
        And the response body should be empty