Blockly.Python['import_communes'] = function(block) {
    var code = 'from communes import *\n';
    return code;
};

Blockly.Python['communes_get'] = function(block) {
    var communes = Blockly.Python.nameDB_.getName(block.getFieldValue('communes'), Blockly.VARIABLE_CATEGORY_NAME);
    var skip = Blockly.Python.valueToCode(block, 'skip', 0);
    var take = Blockly.Python.valueToCode(block, 'take', 0);
    var code = `${communes} = get_current_weather(${skip},${take})\n`;
    return code;
}; 