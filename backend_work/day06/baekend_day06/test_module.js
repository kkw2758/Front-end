const partModule = {
  value: "korea",
  func: function () {
    console.log("value = ", this.value);
  },
};

module.exports.partModule = partModule;
module.exports.moduleName = "parModule";
