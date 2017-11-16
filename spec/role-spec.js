import { Role } from "./../js/role.js";

describe("Role", function() {
  Role.getAllRoles().forEach(function(role) {

    it("The class " + role.name + " skill totals 50", function() {
      let total = 0;
      var keys = Object.keys(role.skills);

      keys.forEach(function(key) {
        let value = role.skills[key];
        total += value;
      });

      expect(total).toEqual(50);
    });
  });
});
