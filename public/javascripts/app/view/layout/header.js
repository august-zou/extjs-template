Ext.define('Demo.view.layout.header', {
  extend: 'Ext.Component',
  initComponent: function() {
    Ext.applyIf(this, {
      xtype: 'box',
      cls: 'header',
      region: 'north',
      html: '<br><font size = 6>和乐管理系统</font>',
      height: 70
    });
    this.callParent(arguments);
  }
});
