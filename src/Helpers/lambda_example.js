const jwt = require("jsonwebtoken");

exports.handler = async (event, context) => {
  try {
    // Extract the token from the Authorization header
    const token = event.headers.Authorization.split(" ")[1];
    // Verify the Auth0 token
    const decodedToken = jwt.verify(token, "YOUR_AUTH0_SIGNING_SECRET");

    // Extract the user's roles and permissions from the token payload
    const { roles, permissions } = decodedToken;

    // Perform authorization checks
    const requiredRoles = ["Program_Admin"]; // Required roles for this Lambda function
    const requiredPermissions = ["create:rubric"]; // Required permissions for this Lambda function

    const isAuthorized =
      requiredRoles.some((role) => roles.includes(role)) ||
      requiredPermissions.some((permission) =>
        permissions.includes(permission)
      );

    if (!isAuthorized) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: "Unauthorized" }),
      };
    }

    // If authorized, continue with the Lambda function logic
    // ...

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Authorized" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
