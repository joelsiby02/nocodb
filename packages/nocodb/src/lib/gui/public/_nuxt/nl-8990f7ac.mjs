const general = {
  home: "Dashboard",
  load: "Laden",
  open: "Openen",
  close: "Sluiten",
  yes: "Ja",
  no: "Nee",
  ok: "OK",
  and: "En",
  or: "Of",
  add: "Toevoegen",
  edit: "Bewerk",
  remove: "Verwijderen",
  save: "Opslaan",
  cancel: "Annuleren",
  submit: "Indienen",
  create: "Cre\xEBren",
  insert: "Invoegen",
  "delete": "Verwijderen",
  update: "Bijwerken",
  rename: "Hernoemen",
  reload: "Herladen",
  reset: "Resetten",
  install: "Installeren",
  show: "Tonen",
  hide: "Verbergen",
  showAll: "Toon alles",
  hideAll: "Verberg alles",
  showMore: "Laat meer zien",
  showOptions: "Toon opties",
  hideOptions: "Verbergd opties",
  showMenu: "Toon menu",
  hideMenu: "Menu verbergen",
  addAll: "Voeg alles toe",
  removeAll: "Verwijder alles",
  signUp: "REGISTREREN",
  signIn: "AANMELDEN",
  signOut: "Afmelden",
  required: "Verplicht",
  preferred: "Gewenst",
  mandatory: "Verplicht",
  loading: "Bezig met laden ...",
  title: "Titel",
  upload: "Uploaden",
  download: "Downloaden",
  "default": "Standaard",
  more: "Meer",
  less: "Minder",
  event: "Gebeurtenis",
  condition: "Voorwaarde",
  after: "Na",
  before: "Voor",
  search: "Zoeken",
  notification: "Melding",
  reference: "Verwijzing",
  "function": "Functie"
};
const objects = {
  project: "Project",
  projects: "Projecten",
  table: "Tabel",
  tables: "Tabellen",
  field: "Veld",
  fields: "Velden",
  column: "Kolom",
  columns: "Kolommen",
  page: "Pagina",
  pages: "Pagina's",
  record: "Record",
  records: "Records",
  webhook: "Webhook",
  webhooks: "Webhooks",
  view: "Weergave",
  views: "Weergaven",
  viewType: {
    grid: "Rooster",
    gallery: "Galerij",
    form: "Formulier",
    kanban: "Kanban",
    calendar: "Kalender"
  },
  user: "Gebruiker",
  users: "Gebruikers",
  role: "Rol",
  roles: "Rollen",
  roleType: {
    owner: "Eigenaar",
    creator: "Creator",
    editor: "Bewerker",
    commenter: "Reviewer",
    viewer: "Kijker"
  }
};
const datatype = {
  ID: "ID",
  ForeignKey: "Externe Key",
  SingleLineText: "Korte tekst",
  LongText: "Lange tekst",
  Attachment: "Bijlage",
  Checkbox: "Selectievakje",
  MultiSelect: "Meerkeuze selectie",
  SingleSelect: "Enkelvoudige selectie",
  Collaborator: "Medewerker",
  "Date": "Datum",
  Year: "Jaar",
  Time: "Tijd",
  PhoneNumber: "Telefoonnummer",
  Email: "E-mail",
  URL: "URL",
  "Number": "Nummer",
  Decimal: "Decimaal",
  Currency: "Munteenheid",
  Percent: "Procent",
  Duration: "Looptijd",
  Rating: "Beoordeling",
  Formula: "Formule",
  Rollup: "Rollup",
  Count: "Telling",
  Lookup: "Zoekopdracht",
  DateTime: "Tijdstip",
  CreateTime: "Maak Tijd",
  LastModifiedTime: "Laatst gewijzigd",
  AutoNumber: "Automatische nummering",
  Barcode: "Barcode",
  Button: "Knop",
  Password: "Wachtwoord",
  relationProperties: {
    noAction: "Geen actie",
    cascade: "Cascade",
    restrict: "Beperken",
    setNull: "Maak NULL",
    setDefault: "Standaard instellen"
  }
};
const filterOperation = {
  isEqual: "is gelijk",
  isNotEqual: "is niet gelijk",
  isLike: "is als",
  "isNot like": "is niet als",
  isEmpty: "is leeg",
  isNotEmpty: "is niet leeg",
  isNull: "is NULL",
  isNotNull: "is niet NULL"
};
const title = {
  newProj: "Nieuw Project",
  myProject: "Mijn Projecten",
  formTitle: "Formuliertitel",
  collabView: "Samenwerkingsweergave",
  lockedView: "Vergrendelde weergave",
  personalView: "Persoonlijke weergave",
  appStore: "App Store",
  teamAndAuth: "Team & Auth",
  rolesUserMgmt: "Rollen & Gebruikersbeheer",
  userMgmt: "Gebruikersbeheer",
  apiTokenMgmt: "API Tokenbeheer",
  rolesMgmt: "Rolbeheer",
  projMeta: "Project Metadata",
  metaMgmt: "Metadatabeheer",
  metadata: "Metadata",
  exportImportMeta: "Metadata exporteren/importeren",
  uiACL: "Toegangscontrole voor UI",
  metaOperations: "Metadata Operaties",
  audit: "Audit",
  auditLogs: "Auditlogboek",
  sqlMigrations: "SQL-Migraties",
  dbCredentials: "Database-inloggegevens",
  advancedParameters: "SSL & Geavanceerde Parameters",
  headCreateProject: "Project maken | Nocodb",
  headLogin: "Log in | Nocodb",
  resetPassword: "Stel je wachtwoord opnieuw in",
  teamAndSettings: "Team & Settings",
  apiDocs: "API Docs",
  importFromAirtable: "Import From Airtable"
};
const labels = {
  notifyVia: "Melding via",
  projName: "Projectnaam",
  tableName: "Tabelnaam",
  viewName: "Weergavenaam",
  viewLink: "Toon Link",
  columnName: "Kolomnaam",
  columnType: "Kolomtype",
  roleName: "Rolnaam",
  roleDescription: "Rolbeschrijving",
  databaseType: "Type in Database",
  lengthValue: "Lengte/ waarde",
  dbType: "Database-type",
  sqliteFile: "SQLITE-bestand",
  hostAddress: "Hostadres",
  port: "Poortnummer",
  username: "Gebruikersnaam",
  password: "Wachtwoord",
  schemaName: "Schema name",
  action: "Actie",
  actions: "Acties",
  operation: "Operatie",
  operationType: "Operatietype",
  operationSubType: "Operatiesubtype",
  description: "Beschrijving",
  authentication: "Authenticatie",
  token: "Token",
  where: "Waar",
  cache: "Cache",
  chat: "Chat",
  email: "E-mail",
  storage: "Opslag",
  uiAcl: "UI-ACL",
  models: "Modellen",
  syncState: "Sync-staat",
  created: "Gemaakt",
  sqlOutput: "SQL Uitvoer",
  addOption: "Optie toevoegen",
  aggregateFunction: "Geaggregeerde functie",
  dbCreateIfNotExists: "Database: cre\xEBer als het niet bestaat",
  clientKey: "Client Key",
  clientCert: "Client Cert",
  serverCA: "Server CA",
  requriedCa: "Required-CA",
  requriedIdentity: "Required-IDENTITY",
  inflection: {
    tableName: "Inflectie - Tabelnaam",
    columnName: "Inflectie - Kolomnaam"
  },
  community: {
    starUs1: "Ster",
    starUs2: "ons op Github",
    bookDemo: "Boek een gratis demonstratie",
    getAnswered: "Krijg je vragen beantwoord",
    joinDiscord: "Join Discord",
    joinCommunity: "Join NocoDB Community",
    joinReddit: "Join /r/NocoDB",
    followNocodb: "Volg NocoDB"
  },
  docReference: "Documentreferentie",
  selectUserRole: "Selecteer de rol van de gebruiker",
  childTable: "Child Tabel",
  childColumn: "Child Kolom",
  onUpdate: "Bij update",
  onDelete: "Bij verwijdering"
};
const activity = {
  createProject: "Maak project",
  importProject: "Importeer project",
  searchProject: "Doorzoek project",
  editProject: "Bewerk project",
  stopProject: "Stop project",
  startProject: "Start project",
  restartProject: "Herstart project",
  deleteProject: "Verwijder project",
  refreshProject: "Projecten vernieuwen",
  saveProject: "Bewaar dit project",
  createProjectExtended: {
    extDB: "Cre\xEBer door verbinding te maken met een externe database",
    excel: "Maak project van Excel",
    template: "Maak project van sjabloon"
  },
  OkSaveProject: "Ok & Sla project op",
  upgrade: {
    available: "Upgrade beschikbaar",
    releaseNote: "Release notes",
    howTo: "Hoe upgraden?"
  },
  translate: "Help met vertaling",
  account: {
    authToken: "Kopieer Auth-token",
    swagger: "Swagger APIs Doc",
    projInfo: "Kopieer projectinformatie",
    themes: "Thema's"
  },
  sort: "Sorteren",
  addSort: "Sorteeroptie toevoegen",
  filter: "Filter",
  addFilter: "Voeg filter toe",
  share: "Deel",
  shareBase: {
    disable: "Schakel de gedeelde database uit",
    enable: "Iedereen met de link",
    link: "Gedeelde databaselink"
  },
  invite: "Uitnodigen",
  inviteMore: "Nodig meer gebruikers uit",
  inviteTeam: "Nodig team uit",
  inviteToken: "Uitnodigingstoken",
  newUser: "Nieuwe gebruiker",
  editUser: "Bewerk gebruiker",
  deleteUser: "Verwijder gebruiker van project",
  resendInvite: "Verzend uitnodigingsemail opnieuw",
  copyInviteURL: "Kopieer uitnodigingslink",
  newRole: "Nieuwe rol",
  reloadRoles: "Rollen verversen",
  nextPage: "Volgende pagina",
  prevPage: "Vorige pagina",
  nextRecord: "Volgend record",
  previousRecord: "Vorig record",
  copyApiURL: "Kopieer API URL",
  createTable: "Tabel cre\xEBren",
  refreshTable: "Tabellen verversen",
  renameTable: "Tabel hernoemen",
  deleteTable: "Tabel verwijderen",
  addField: "Voeg nieuw veld toe aan deze tabel",
  setPrimary: "Instellen als primaire waarde",
  addRow: "Nieuwe rij toevoegen",
  saveRow: "Sla rij op",
  insertRow: "Voeg nieuwe rij toe",
  deleteRow: "Verwijder rij",
  deleteSelectedRow: "Verwijder geselecteerde rijen",
  importExcel: "Excel importeren",
  importCSV: "Import CSV",
  downloadCSV: "Download als CSV",
  downloadExcel: "Download als XLSX",
  uploadCSV: "Upload CSV",
  "import": "Importeren",
  importMetadata: "Importeer Metadata",
  exportMetadata: "Exporteer Metadata",
  clearMetadata: "Metadata Wissen",
  exportToFile: "Exporteren naar het bestand",
  changePwd: "Wachtwoord wijzigen",
  createView: "Maak een weergave",
  shareView: "Deel weergave",
  listSharedView: "Lijst van gedeelde weergaven",
  ListView: "Weergavelijst",
  copyView: "Kopieer weergave",
  renameView: "Hernoem weergave",
  deleteView: "Weergave verwijderen",
  createGrid: "Maak rasterweergave",
  createGallery: "Maak galerijweergave",
  createCalendar: "Maak kalenderweergave",
  createKanban: "Maak kanbanweergave",
  createForm: "Maak formulierweergave",
  showSystemFields: "Toon systeemvelden",
  copyUrl: "Kopieer URL",
  openTab: "Open nieuw tabblad",
  iFrame: "Insluitbare HTML-code kopi\xEBren",
  addWebhook: "Webhook toevoegen",
  newToken: "Token toevoegen",
  exportZip: "Exporteer als zip",
  importZip: "Importeer van zip",
  metaSync: "Synchroniseer Nu",
  settings: "Instellingen",
  previewAs: "Voorvertoning als",
  resetReview: "Reset Voorvertoning",
  testDbConn: "Test Databaseverbinding",
  removeDbFromEnv: "Verwijder de database uit de omgeving",
  editConnJson: "Bewerk verbinding JSON",
  sponsorUs: "Sponsor Ons",
  sendEmail: "STUUR E-MAIL"
};
const tooltip = {
  saveChanges: "Wijzigingen opslaan",
  xcDB: "Maak een nieuw project",
  extDB: "Ondersteunt MySQL, PostgreSQL, SQL Server & Sqlite",
  apiRest: "Toegankelijk via REST API's",
  apiGQL: "Toegankelijk via GraphQL API's",
  theme: {
    dark: "Het komt in zwart (^ \u21E7b)",
    light: "Komt het in het zwart? (^ \u21E7b)"
  },
  addTable: "Voeg een nieuwe tabel toe",
  inviteMore: "Nodig meer gebruikers uit",
  toggleNavDraw: "Open/sluit navigatiebalk",
  reloadApiToken: "API tokens verversen",
  generateNewApiToken: "Genereer nieuw API token",
  addRole: "Voeg een nieuwe rol toe",
  reloadList: "Herlaad lijst",
  metaSync: "Synchroniseer metadata",
  sqlMigration: "Herlaad migraties",
  updateRestart: "Bijwerken & Opnieuw Opstarten",
  cancelReturn: "Annuleren en Terug",
  exportMetadata: "Exporteer alle metadata van metatabellen naar de meta-folder.",
  importMetadata: "Importeer alle metadata van de meta-folder naar metatabellen.",
  clearMetadata: "Wis alle metadata uit metatabellen.",
  clientKey: "Selecteer .key-bestand",
  clientCert: "Selecteer .cert-bestand",
  clientCA: "Selecteer CA-bestand"
};
const placeholder = {
  projName: "Geef de Projectnaam",
  password: {
    enter: "Geef het Wachtwoord",
    current: "Huidig \u200B\u200Bwachtwoord",
    "new": "Nieuw wachtwoord",
    save: "Wachtwoord opslaan",
    confirm: "Bevestig nieuw wachtwoord"
  },
  searchProjectTree: "Zoek in tabellen",
  searchFields: "Zoek in velden",
  searchColumn: "Doorzoek kolom {search}",
  searchApps: "Zoek naar apps",
  searchModels: "Zoekmodellen",
  noItemsFound: "Geen items gevonden",
  defaultValue: "Standaardwaarde",
  filterByEmail: "Filteren per e-mail"
};
const msg = {
  info: {
    footerInfo: "Rijen per pagina",
    upload: "Selecteer bestand om te uploaden",
    upload_sub: "of sleep het bestand naar hier",
    excelSupport: "Ondersteunt: .xls, .xlsx, .xlsm, .ods, .ots",
    excelURL: "Voer Excel-bestandslink in",
    csvURL: "Enter CSV file URL",
    footMsg: "# rijen om te parseren om datatype af te leiden",
    excelImport: "blad(en) zijn beschikbaar om te importeren",
    exportMetadata: "Wilt u metadata uit metatabellen exporteren?",
    importMetadata: "Wilt u metadata importeren van metatabellen?",
    clearMetadata: "Wilt u metadata uit metatabellen wissen?",
    projectEmptyMessage: "Ga aan de slag door een nieuw project te maken",
    stopProject: "Wilt u het project stoppen?",
    startProject: "Wilt u het project starten?",
    restartProject: "Wilt u het project opnieuw opstarten?",
    deleteProject: "Wilt u het project verwijderen?",
    shareBasePrivate: "Genereer openbaar deelbare alleen-lezen database",
    shareBasePublic: "Iedereen op het internet met deze link kan bekijken",
    userInviteNoSMTP: "Het lijkt erop dat je nog geen mailer hebt geconfigureerd! \\n Kopieer de bovenstaande uitnodigingslink en verstuur deze zelf naar de ontvanger",
    dragDropHide: "Versleep de velden naar hier om ze te verbergen",
    formInput: "Voer formulier invoerlabel in",
    formHelpText: "Voeg wat hulptekst toe",
    onlyCreator: "Alleen zichtbaar voor Creators",
    formDesc: "Voeg een formulierbeschrijving toe",
    beforeEnablePwd: "Beperk de toegang met een wachtwoord",
    afterEnablePwd: "Toegang is wachtwoord beperkt",
    privateLink: "Deze weergave wordt gedeeld via een priv\xE9link",
    privateLinkAdditionalInfo: "Mensen met priv\xE9link kunnen alleen cellen zien die zichtbaar zijn in deze weergave",
    afterFormSubmitted: "Nadat het formulier ingediend wordt",
    apiOptions: "Krijg toegang tot het project via",
    submitAnotherForm: "Toon 'Stuur een nieuwe inzending' in",
    showBlankForm: "Toon een leeg formulier na 5 seconden",
    emailForm: "E-mail me op",
    showSysFields: "Toon systeemvelden",
    filterAutoApply: "Automatisch toepassen",
    showMessage: "Toon dit bericht",
    viewNotShared: "Huidige weergave is niet gedeeld!",
    showAllViews: "Toon alle gedeelde weergaven van deze tabel",
    collabView: "Collaborators met bewerkingsmachtigingen of hoger kunnen de weergaveconfiguratie wijzigen.",
    lockedView: "Niemand kan de weergaveconfiguratie bewerken totdat deze is ontgrendeld.",
    personalView: "Alleen u kunt de weergaveconfiguratie bewerken. De persoonlijke weergaven van andere medewerkers zijn standaard verborgen.",
    ownerDesc: "Kan Creators toevoegen en verwijderen. Heeft volledige bewerkingsmachtigingen.",
    creatorDesc: "Heeft volledige bewerkingsmachtigingen over de database structuur en waarden.",
    editorDesc: "Kan records bewerken, maar kan geen structuur van database / velden wijzigen.",
    commenterDesc: "Kan de records bekijken en becommentari\xEBren, maar kan niets bewerken",
    viewerDesc: "Kan de records bekijken, maar kan niets bewerken",
    addUser: "Voeg een nieuwe gebruiker toe",
    staticRoleInfo: "Systeem gedefinieerde rollen kunnen niet worden bewerkt",
    exportZip: "Export project meta naar zipbestand en download.",
    importZip: "Import project meta zip-bestand en start opnieuw op.",
    importText: "Import NocoDB-project door het uploaden van het metadata zip-bestand",
    metaNoChange: "Geen verandering gevonden",
    sqlMigration: "Schem-migraties worden automatisch gemaakt. Maak een tabel en vernieuw deze pagina.",
    dbConnectionStatus: "Omgeving gevalideerd",
    dbConnected: "Succesvolle verbinding",
    notifications: {
      no_new: "Geen nieuwe meldingen",
      clear: "Wissen"
    },
    sponsor: {
      header: "Je kunt ons helpen!",
      message: "Wij zijn een klein team dat fulltime werkt om de open-source van NocoDB te maken. Wij geloven dat een tool zoals NocoDB vrijelijk beschikbaar zou zijn op elke probleemoplosser op internet."
    },
    loginMsg: "Log in bij NocoDB",
    passwordRecovery: {
      message_1: "Geef het e-mailadres op dat u hebt gebruikt toen u zich hebt aangemeld.",
      message_2: "We sturen u een e-mail met een link om uw wachtwoord opnieuw in te stellen.",
      success: "Controleer uw e-mail om het wachtwoord opnieuw in te stellen"
    },
    signUp: {
      superAdmin: "Je wordt de 'Super Admin'",
      alreadyHaveAccount: "Heb je al een account?",
      workEmail: "Voer uw werkemail in",
      enterPassword: "Voer uw wachtwoord in",
      forgotPassword: "Wachtwoord vergeten?",
      dontHaveAccount: "Heb je geen account?"
    },
    addView: {
      grid: "Rasterweergave toevoegen",
      gallery: "Gallerijweergave toevoegen",
      form: "Formulierweergave toevoegen",
      kanban: "Kanbanweergave toevoegen",
      calendar: "Kalenderweergave toevoegen"
    },
    tablesMetadataInSync: "Tabelmetadata is gesynchroniseerd",
    addMultipleUsers: "U kunt meerdere komma (,) gescheiden e-mails toevoegen",
    enterTableName: "Voer de tabelnaam in",
    addDefaultColumns: "Voeg standaardkolommen toe",
    tableNameInDb: "Tabelnaam zoals opgeslagen in de database"
  },
  error: {
    searchProject: "Uw zoekopdracht voor {search} heeft geen resultaten opgeleverd",
    invalidChar: "Ongeldig karakter in folderlocatie.",
    invalidDbCredentials: "Ongeldige database-inloggegevens.",
    unableToConnectToDb: "Kan geen verbinding maken met de database, controleer dat uw database actief is.",
    userDoesntHaveSufficientPermission: "Gebruiker bestaat niet of heeft onvoldoende toestemming om schema te maken.",
    dbConnectionStatus: "Ongeldige databaseparameters",
    dbConnectionFailed: "Verbindingsstoring:",
    signUpRules: {
      emailReqd: "E-mail is vereist",
      emailInvalid: "E-mail moet geldig zijn",
      passwdRequired: "Wachtwoord is verplicht",
      passwdLength: "Je wachtwoord moet ten minste 8 tekens hebben"
    }
  },
  toast: {
    exportMetadata: "Project metadata met succes ge\xEBxporteerd",
    importMetadata: "Project metadata met succes ge\xEFmporteerd",
    clearMetadata: "Project metadata is succesvol gewist",
    stopProject: "Project is succesvol gestopt",
    startProject: "Project is succesvol gestart",
    restartProject: "Project met succes opnieuw gestart",
    deleteProject: "Project succesvol verwijderd",
    authToken: "Auth-token gekopieerd naar klembord",
    projInfo: "Projectinformatie naar klembord gekopieerd",
    inviteUrlCopy: "UitnodigignsURL gekopieerd naar klembord",
    createView: "Weergave met succes gemaakt",
    formEmailSMTP: "Activeer de SMTP-plug-in in de App Store voor het inschakelen van e-mailmeldingen",
    collabView: "Met succes geschakeld naar een samenwerkingsweergave",
    lockedView: "Met succes geschakeld naar vergrendelde weergave",
    futureRelease: "Binnenkort beschikbaar!"
  }
};
var nl = {
  general,
  objects,
  datatype,
  filterOperation,
  title,
  labels,
  activity,
  tooltip,
  placeholder,
  msg
};
export { activity, datatype, nl as default, filterOperation, general, labels, msg, objects, placeholder, title, tooltip };