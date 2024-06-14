const sinon = require("sinon");

const mockAsync = (model, module, result = null) => {
  return sinon.stub(model, module).resolves(result);
};

const RESPONSE = {
  json: function (data) {
    return data;
  },
};
const USER = {
  id: "1",
  name: "Afonsinho",
  power: "codar",
  age: "23",
  secretIdentity: "Super Afonso",
};

const FILE = (fieldName) => {
  return {
    upload: (options, callback) => {
      // Simular o upload do arquivo
      callback(null, [{ fd: "caminho/do/arquivo" }]);
    },
  };
};

module.exports = {
  mockAsync,
  RESPONSE,
  USER,
  FILE,
};
