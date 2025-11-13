const communeColor = "#108a00";

Blockly.Blocks['import_communes'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from communes import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(communeColor);
    }
};

Blockly.Blocks['communes_get'] = {
    init: function() {
        this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("communes"), "communes")
          .appendField(" = ")
          .appendField(".get(");
        this.appendValueInput("skip")
            .setCheck(null);
        this.appendValueInput("take")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(communeColor);
    }
}; 