function ConvertDataToGrid(inputObject) {
  const result = [];

  // Les rôles à prendre en compte
  const roles = Object.keys(inputObject);

  // Les méthodes HTTP à prendre en compte
  const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

  // Parcours des méthodes HTTP
  methods.forEach((method) => {
    // Parcours des routes
    Object.keys(inputObject[roles[0]]).forEach((path, index) => {
      const pathObject = { method, path, key: `${method}-${path}-${index}` };
      roles.forEach((role) => {
        pathObject[role.toLowerCase()] = inputObject[role][path][method] ? inputObject[role][path][method] : false;
      });
      result.push(pathObject);
    });
  });

  return result;
}

export default ConvertDataToGrid

// const transformedArray = ConvertDataToGrid(inputObject);
// console.log(transformedArray);
