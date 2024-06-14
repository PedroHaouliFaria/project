const assert = require("assert");
const controller = require("../../../api/controllers/HeroesController");
const { mockAsync, RESPONSE, USER, FILE } = require("../../util");

describe("HeroesController", () => {
  it("Deve criar usuário com sucesso", async () => {

    const databaseStub = mockAsync(Heroes, "create", true);
    const req = {
      body: USER,
      file: FILE,
    };

    const result = await controller.create(req, RESPONSE);

    assert.strictEqual(uploadStub.calledOnce, true);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, { success: true });
  });

  it("Deve criar usuário com sucesso", async () => {
    const listStub = mockAsync(Heroes, "list", USER);
    const req = {
      body: {
        name: "Afonsinho",
        power: "codar",
        age: "23",
        secretIdentity: "Super Afonso",
      },
    };

    const result = await controller.list(req, RESPONSE);
    assert.strictEqual(listStub.calledOnce, true);

    assert.ok(result.access_token);
  });
  it("Deve criar usuário com sucesso", async () => {
    const listStub = mockAsync(Heroes, "listwithgun", USER);
    const res = {
      body: {
        gun: "Cajado",
      },
    };

    const result = await controller.listwithgun(RESPONSE);
    assert.strictEqual(listwithgunStub.calledOnce, true);

    assert.ok(result.access_token);
  });
  
});
