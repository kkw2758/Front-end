// let module2 = require("./test_module");
// let partModule = module2.partMoudle;
// let moduleName = module2.moduleName;

// 구조 분해 할당
const { partModule, moduleName } = require("./test_module");

// module.exports.partModule = partModule;
// module.exports.moduleName = "parModule";

partModule.func();
console.log("moduleName : ", moduleName);
