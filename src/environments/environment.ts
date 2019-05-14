export const environment = {
  production: false,
  // dynamicFormBaseDevUrl: 'http://localhost:8081/',
  dynamicFormBaseDevUrl: 'http://max.cav.local:8080/portal/',

  dynamicFormQuestionsUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=FORM',
  dynamicFormValidateUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=VALIDATE',
  dynamicFormSaveUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=SAVE',
  dynamicGridUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=GRID',
  dynamicGridDataUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=GRIDDATA',
  dynaimcFormAutoCompleteUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=AUTOCOMP',
  dynamicGetLinkUrl: 'mcall?_NS=%25ZCAVWEB&_ROUTINE=%25ZCAVWEB&_LABEL=LINK',
  dynamicDeleteGridRowUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=DELETE',
  dynamicRestoreGridRowUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=RESTORE',
  dynamicAppUrl: 'mcall?_NS=#&_ROUTINE=%25ZCAVWEB&_LABEL=APL&JB=123456&_USERNAME=AAA&_PASSWORD=4562',
  dynamicSaveAppUrl: 'mcall?_NS=USER&_ROUTINE=%25ZCAVWEB&_LABEL=SAVEAPP',
  dynamicSubmitHeaderForm: 'mcall?_NS=#&_ROUTINE=%25ZCAVWEB&_LABEL=HEADER',
  usernamePassword: '_USERNAME=AAA&_PASSWORD=4562',

  sessionInfoUrl: 'mcall?_NS=CAV&_ROUTINE=PORTAL&_LABEL=SESSIONINFO&JB=123456&_USERNAME=AAA&_PASSWORD=4562',

  uci: '',
  app: ''

};
