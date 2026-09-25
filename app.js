const WORLD_TOPOJSON_URL = "assets/data/countries-110m.json";
const APP_STORAGE_PREFIX = "aerointel-atlas";
const LEGACY_STORAGE_PREFIX = "natovsbrics";
const AUTH_USERS_KEY = `${APP_STORAGE_PREFIX}.users`;
const AUTH_SESSION_KEY = `${APP_STORAGE_PREFIX}.session`;
const FAVORITE_AIRCRAFT_KEY = `${APP_STORAGE_PREFIX}.favoriteAircraft`;
const COMPARE_AIRCRAFT_KEY = `${APP_STORAGE_PREFIX}.compareAircraft`;
const LANGUAGE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.language`;
const STORAGE_KEY_MIGRATIONS = [
  [`${LEGACY_STORAGE_PREFIX}.users`, AUTH_USERS_KEY],
  [`${LEGACY_STORAGE_PREFIX}.session`, AUTH_SESSION_KEY],
  [`${LEGACY_STORAGE_PREFIX}.favoriteAircraft`, FAVORITE_AIRCRAFT_KEY],
  [`${LEGACY_STORAGE_PREFIX}.compareAircraft`, COMPARE_AIRCRAFT_KEY],
  [`${LEGACY_STORAGE_PREFIX}.language`, LANGUAGE_STORAGE_KEY],
];
const COMMONS_IMAGE_WIDTH = 720;
const DEFAULT_LANGUAGE = "tr";
const DEFAULT_USER_SETTINGS = {
  defaultFilter: "all",
  inventoryDensity: "comfortable",
  rememberSelection: true,
  reducedMotion: false,
  highContrast: false,
  lastCountryId: "us",
  lastAircraftId: "f35a",
};

const DATA_LAST_CHECKED = "Haziran 2026";

const munitionFilterOptions = [
  { id: "all", label: "Tümü", labelEn: "All" },
  { id: "air", label: "Hava-hava", labelEn: "Air-to-air" },
  { id: "strike", label: "Hava-yer", labelEn: "Air-to-ground" },
  { id: "standoff", label: "Stand-off", labelEn: "Stand-off" },
  { id: "bomb", label: "Bombalar", labelEn: "Bombs" },
  { id: "rocket", label: "Roketler", labelEn: "Rockets" },
  { id: "gun", label: "Toplar", labelEn: "Guns" },
  { id: "pod", label: "Podlar", labelEn: "Pods" },
];

const mockAiCategories = [
  { id: "general", label: "Genel Profil", labelEn: "General Profile", signal: null, threshold: 0 },
  { id: "air", label: "Hava-hava", labelEn: "Air-to-air", signal: "Hava-hava", threshold: 44 },
  { id: "strike", label: "Taarruz", labelEn: "Strike", signal: "Taarruz", threshold: 42 },
  { id: "stealth", label: "Stealth", labelEn: "Stealth", signal: "Stealth", threshold: 40 },
  { id: "naval", label: "Deniz", labelEn: "Naval", signal: "Deniz", threshold: 30 },
  { id: "modern", label: "Modernlik", labelEn: "Modernity", signal: "Modernlik", threshold: 52 },
];

const countryInventoryFilters = [
  { id: "all", label: "Tümü", labelEn: "All" },
  { id: "air", label: "Hava-hava", labelEn: "Air-to-air" },
  { id: "strike", label: "Taarruz", labelEn: "Strike" },
  { id: "stealth", label: "Stealth", labelEn: "Stealth" },
  { id: "naval", label: "Deniz", labelEn: "Naval" },
  { id: "modern", label: "Modern", labelEn: "Modern" },
  { id: "legacy", label: "Legacy", labelEn: "Legacy" },
  { id: "conditional", label: "Gelecek", labelEn: "Future" },
];

const UI_TEXT = {
  tr: {
    htmlLang: "tr",
    locale: "tr-TR",
    title: "AeroIntel Atlas",
    brandEyebrow: "Açık Kaynak Hava Gücü İzleme Konsolu",
    statusAria: "Sistem durumu",
    statusMap: "Harita aktif",
    statusData: "Veri açık kaynak",
    statusLanguage: "Türkçe arayüz",
    languageLabel: "Dil",
    languageAria: "Dil seçimi",
    menu: "Menü",
    authGuest: "Giriş / Kayıt",
    mapEyebrow: "Küresel ittifak görünümü",
    mapTitle: "Dünya Haritası",
    allianceFilterAria: "İttifak filtresi",
    all: "Tümü",
    mapAria: "NATO ülkeleri mavi, BRICS üyeleri kırmızı gösterilen dünya haritası",
    zoomControlsAria: "Harita yakınlaştırma kontrolleri",
    zoomInAria: "Haritayı yakınlaştır",
    zoomOutAria: "Haritayı uzaklaştır",
    zoomResetAria: "Harita yakınlaştırmasını sıfırla",
    mapReadoutIdle: "Ülke seçimi bekleniyor",
    legendNato: "NATO üyesi",
    legendBrics: "BRICS üyesi",
    legendNeutral: "Diğer ülkeler",
    intelConsoleAria: "Ülke ve uçak bilgi paneli",
    countrySearchLabel: "Ülke ara",
    countrySearchPlaceholder: "Amerika, Türkiye, Rusya...",
    countryResultsAria: "Ülke arama sonuçları",
    commandLabel: "Komuta",
    focusLabel: "Odak",
    modernizationTimeline: "Modernizasyon Çizelgesi",
    openSourceReading: "Açık kaynak okuması",
    aircraftInventory: "Uçak Envanteri",
    aiEyebrow: "AI rolü için ilk konsept",
    aiTitle: "Taktik Analiz Asistanı",
    countryCompareButton: "Ülke Karşılaştır",
    aiCompareButton: "AI Karşılaştırma Analizi",
    refreshAnalysis: "Analizi Yenile",
    liveBriefing: "Canlı Brifing",
    questionSuggestions: "Soru Önerileri",
    countryAiSummaryTitle: "Ülke AI Özeti",
    signalReading: "Seviye Okuması",
    menuCloseAria: "Menüyü kapat",
    menuEyebrow: "Komuta menüsü",
    menuTitle: "Atlas Kontrol Paneli",
    menuAccountWaiting: "Oturum bekleniyor",
    menuGuestUser: "Ziyaretçi kullanıcı",
    menuGuestDetail: "Hesap detayları için giriş yap.",
    menuLoginHint: "Giriş veya kayıt paneli",
    menuAccountTitle: "Hesap Detayları",
    menuAccountSmall: "Profil ve oturum bilgileri",
    menuSettingsTitle: "Ayarlar",
    menuSettingsSmall: "Filtre, görünüm ve envanter yoğunluğu",
    menuCompareTitle: "Favoriler / Karşılaştırma",
    menuCompareSmall: "Seçili platformları yan yana incele",
    menuMockTitle: "AI Karşılaştırma Analizi",
    menuMockSmall: "Kategoriye göre AI kabiliyet yorumu",
    menuCountryCompareTitle: "Ülke Karşılaştırma",
    menuCountryCompareSmall: "İki ülkenin hava gücü profilini yan yana oku",
    menuSourcesTitle: "Kullandığımız Kaynaklar",
    menuSourcesSmall: "Açık kaynak veri ve görsel bağlantıları",
    menuMapTitle: "Harita Konsolu",
    menuMapSmall: "Ülke seçimi ve ittifak görünümü",
    favorites: "Favoriler",
    sources: "Kaynaklar",
    sourceBackbone: "Kategorili doğrulama omurgası",
    sourceAllianceHeading: "İttifak kaynakları",
    memberCountryList: "Üye ülkeler listesi",
    aircraftManufacturers: "Uçak üreticileri",
    platformInfo: "Platform bilgisi",
    airForcesData: "Hava kuvvetleri ve veri",
    aircraftFactSheets: "Uçak bilgi kartları",
    visualMap: "Görsel ve harita",
    aircraftMunitionVisuals: "Uçak ve mühimmat görselleri",
    worldBoundaryData: "Dünya sınır verisi",
    performanceMode: "Performans modu",
    active: "Aktif",
    compareCloseAria: "Karşılaştırma panelini kapat",
    compareEyebrow: "Analiz modu",
    compareTitle: "Platform Karşılaştırması",
    compareDefaultSummary: "Karşılaştırmak için iki veya üç uçağı seç.",
    mockCloseAria: "AI panelini kapat",
    mockEyebrow: "AI analiz modu",
    mockTitle: "Kabiliyet Karşılaştırma Analizi",
    mockDefaultSummary: "Kategori seç, iki platform belirle, kabiliyet profilini karşılaştır.",
    category: "Kategori",
    firstPlatform: "1. Platform",
    secondPlatform: "2. Platform",
    runAiAnalysis: "AI Analizini Çalıştır",
    swapPlatforms: "Platformları Değiştir",
    countryCompareCloseAria: "Ülke karşılaştırma panelini kapat",
    countryCompareEyebrow: "Stratejik ülke analizi",
    countryCompareTitle: "Ülke Hava Gücü Karşılaştırması",
    countryCompareDefaultSummary: "İki ülke seç; filo ölçeği, kabiliyet sinyalleri ve modernizasyon riskini yan yana incele.",
    firstCountry: "1. Ülke",
    secondCountry: "2. Ülke",
    runCountryAnalysis: "Ülke Analizini Çalıştır",
    swapCountries: "Ülkeleri Değiştir",
    countryIntelCloseAria: "Ülke hava gücü panelini kapat",
    countryIntelDefaultCode: "Ülke seçimi",
    countryIntelDefaultTitle: "Hava Gücü Profili",
    countryIntelDefaultDescription: "Haritadan seçilen ülkenin açık kaynak hava gücü okuması burada gösterilir.",
    inventoryLabel: "Envanter",
    radarEyebrow: "HUD kabiliyet radarı",
    radarTitle: "Kabiliyet Skor Radarı",
    radarDefaultSummary: "Seçili ülkenin görev kabiliyetleri görsel skorlarla özetlenir.",
    sourceTrustEyebrow: "Kaynak güven matrisi",
    sourceTrustTitle: "Kaynak Güven Skoru",
    sourceTrustDefaultSummary: "Ülke envanteri için kaynak güven dağılımı hazırlanıyor.",
    alertEyebrow: "Komuta uyarıları",
    alertTitle: "Kritik Envanter Uyarıları",
    alertDefaultSummary: "Seçili ülke için kritik envanter sinyalleri hazırlanıyor.",
    combatPlatforms: "Muharip platformlar",
    compareCountry: "Ülkeyi Karşılaştır",
    countryInventoryFiltersAria: "Ülke envanteri filtreleri",
    allPlatformsShown: "Tüm platformlar gösteriliyor.",
    inspectCloseAria: "İnceleme panelini kapat",
    inspectImageAlt: "İncelenen savaş uçağı görseli",
    imageLoadFailed: "Görsel yüklenemedi",
    platformInspect: "Platform inceleme",
    inventoryNavAria: "Envanter içinde gezinme",
    prevAircraftAria: "Önceki uçak",
    nextAircraftAria: "Sonraki uçak",
    aircraftNotSelected: "Savaş uçağı seçilmedi",
    addFavorite: "Favoriye Ekle",
    removeFavorite: "Favoriden Çıkar",
    addCompare: "Karşılaştırmaya Ekle",
    removeCompare: "Karşılaştırmadan Çıkar",
    capabilityProfile: "Kabiliyet Profili",
    loadoutProfile: "Yükleme profili",
    compatibleMunitions: "Kullanabildiği Mühimmatlar",
    inventoryContext: "Envanter Bağlamı",
    sourceVerification: "Kaynak ve Doğrulama",
    munitionCloseAria: "Mühimmat panelini kapat",
    munitionSubtitleDefault: "Açık kaynak mühimmat profili",
    munitionTitleDefault: "Mühimmat Envanteri",
    munitionFiltersAria: "Mühimmat filtreleri",
    selectedMunitionAlt: "Seçili mühimmat görseli",
    munitionDetailCard: "Mühimmat bilgi kartı",
    munitionNotSelected: "Mühimmat seçilmedi",
    role: "Rol",
    guidance: "Güdüm",
    origin: "Menşei",
    note: "Not",
    munitionCaveat:
      "Not: Listeler açık kaynaklarda bilinen uyumlu/entegrasyonu raporlanan mühimmat ailelerini temsil eder; kullanıcı ülke, modernizasyon paketi ve sertifikasyon durumuna göre değişebilir.",
    authCloseAria: "Paneli kapat",
    authEyebrow: "Güvenli erişim",
    authTitle: "Kullanıcı Paneli",
    authTabsAria: "Kullanıcı işlemleri",
    login: "Giriş",
    register: "Kayıt Ol",
    email: "E-posta",
    password: "Şifre",
    loginSubmit: "Giriş Yap",
    forgotPassword: "Şifremi Unuttum",
    forgotPasswordNote: "Kayıtlı e-posta adresini girerek bu tarayıcıdaki hesabın için yeni şifre belirleyebilirsin.",
    forgotNewPassword: "Yeni şifre",
    forgotNewPasswordRepeat: "Yeni şifre tekrar",
    updatePassword: "Şifreyi Güncelle",
    backToLogin: "Girişe Dön",
    username: "Kullanıcı adı",
    passwordRepeat: "Şifre tekrar",
    analysisProfile: "Analiz profili",
    neutralObserver: "Tarafsız gözlemci",
    natoFocused: "NATO odaklı",
    bricsFocused: "BRICS odaklı",
    createAccount: "Hesap Oluştur",
    accountTabsAria: "Hesap paneli",
    profile: "Profil",
    settings: "Ayarlar",
    activeSession: "Aktif oturum",
    saveProfile: "Profili Kaydet",
    sessionSummaryAria: "Oturum özeti",
    registeredAt: "Kayıt",
    lastCountry: "Son ülke",
    lastAircraft: "Son uçak",
    defaultFilter: "Varsayılan filtre",
    logout: "Çıkış Yap",
    defaultAllianceFilter: "Varsayılan ittifak filtresi",
    inventoryDensity: "Envanter yoğunluğu",
    standard: "Standart",
    compact: "Kompakt",
    sessionStartup: "Oturum başlangıcı",
    rememberLast: "Son ülke ve uçağı hatırla",
    defaultOpening: "Varsayılan açılış",
    reduceMotion: "Animasyonları azalt",
    highContrast: "Yüksek kontrast",
    saveSettings: "Ayarları Kaydet",
    authFootnote: "Bu prototipte hesaplar yalnızca bu tarayıcıda saklanır.",
    footerSourceBackbone: "Kaynak omurgası:",
    selected: "seçildi",
    airPower: "Hava Gücü",
    inventoryTitle: "Envanteri",
    sourceData: "Veri kaynağı",
    imageSource: "Görsel kaynağı",
    lastChecked: "Son kontrol",
    trustLevel: "Güven seviyesi",
    strongestArea: "En güçlü alan",
    lowBetter: "düşük daha iyi",
    noPlatforms: "Platform yok",
    noCountries: "Ülke yok",
    dataLastChecked: "Haziran 2026",
  },
  en: {
    htmlLang: "en",
    locale: "en-US",
    title: "AeroIntel Atlas",
    brandEyebrow: "Open-Source Air Power Monitoring Console",
    statusAria: "System status",
    statusMap: "Map online",
    statusData: "Open-source data",
    statusLanguage: "English interface",
    languageLabel: "Language",
    languageAria: "Language selection",
    menu: "Menu",
    authGuest: "Login / Sign up",
    mapEyebrow: "Global alliance view",
    mapTitle: "World Map",
    allianceFilterAria: "Alliance filter",
    all: "All",
    mapAria: "World map showing NATO countries in blue and BRICS members in red",
    zoomControlsAria: "Map zoom controls",
    zoomInAria: "Zoom map in",
    zoomOutAria: "Zoom map out",
    zoomResetAria: "Reset map zoom",
    mapReadoutIdle: "Waiting for country selection",
    legendNato: "NATO member",
    legendBrics: "BRICS member",
    legendNeutral: "Other countries",
    intelConsoleAria: "Country and aircraft information panel",
    countrySearchLabel: "Search country",
    countrySearchPlaceholder: "United States, Türkiye, Russia...",
    countryResultsAria: "Country search results",
    commandLabel: "Command",
    focusLabel: "Focus",
    modernizationTimeline: "Modernization Timeline",
    openSourceReading: "Open-source reading",
    aircraftInventory: "Aircraft Inventory",
    aiEyebrow: "Initial concept for the AI role",
    aiTitle: "Tactical Analysis Assistant",
    countryCompareButton: "Compare Countries",
    aiCompareButton: "AI Comparison Analysis",
    refreshAnalysis: "Refresh Analysis",
    liveBriefing: "Live Briefing",
    questionSuggestions: "Question Suggestions",
    countryAiSummaryTitle: "Country AI Summary",
    signalReading: "Signal Reading",
    menuCloseAria: "Close menu",
    menuEyebrow: "Command menu",
    menuTitle: "Atlas Control Panel",
    menuAccountWaiting: "No active session",
    menuGuestUser: "Guest user",
    menuGuestDetail: "Log in for account details.",
    menuLoginHint: "Login or sign-up panel",
    menuAccountTitle: "Account Details",
    menuAccountSmall: "Profile and session information",
    menuSettingsTitle: "Settings",
    menuSettingsSmall: "Filter, display and inventory density",
    menuCompareTitle: "Favorites / Compare",
    menuCompareSmall: "Review selected platforms side by side",
    menuMockTitle: "AI Comparison Analysis",
    menuMockSmall: "AI capability readout by category",
    menuCountryCompareTitle: "Country Comparison",
    menuCountryCompareSmall: "Read two air power profiles side by side",
    menuSourcesTitle: "Sources Used",
    menuSourcesSmall: "Open-source data and image links",
    menuMapTitle: "Map Console",
    menuMapSmall: "Country selection and alliance view",
    favorites: "Favorites",
    sources: "Sources",
    sourceBackbone: "Categorized verification backbone",
    sourceAllianceHeading: "Alliance sources",
    memberCountryList: "Member country list",
    aircraftManufacturers: "Aircraft manufacturers",
    platformInfo: "Platform information",
    airForcesData: "Air forces and data",
    aircraftFactSheets: "Aircraft fact sheets",
    visualMap: "Visuals and map",
    aircraftMunitionVisuals: "Aircraft and munition images",
    worldBoundaryData: "World boundary data",
    performanceMode: "Performance mode",
    active: "Active",
    compareCloseAria: "Close comparison panel",
    compareEyebrow: "Analysis mode",
    compareTitle: "Platform Comparison",
    compareDefaultSummary: "Select two or three aircraft to compare.",
    mockCloseAria: "Close AI panel",
    mockEyebrow: "AI analysis mode",
    mockTitle: "Capability Comparison Analysis",
    mockDefaultSummary: "Select a category and two platforms to compare capability profiles.",
    category: "Category",
    firstPlatform: "1st Platform",
    secondPlatform: "2nd Platform",
    runAiAnalysis: "Run AI Analysis",
    swapPlatforms: "Swap Platforms",
    countryCompareCloseAria: "Close country comparison panel",
    countryCompareEyebrow: "Strategic country analysis",
    countryCompareTitle: "Country Air Power Comparison",
    countryCompareDefaultSummary: "Select two countries and review fleet scale, capability signals and modernization risk.",
    firstCountry: "1st Country",
    secondCountry: "2nd Country",
    runCountryAnalysis: "Run Country Analysis",
    swapCountries: "Swap Countries",
    countryIntelCloseAria: "Close country air power panel",
    countryIntelDefaultCode: "Country selection",
    countryIntelDefaultTitle: "Air Power Profile",
    countryIntelDefaultDescription: "The selected country's open-source air power reading appears here.",
    inventoryLabel: "Inventory",
    radarEyebrow: "HUD capability radar",
    radarTitle: "Capability Score Radar",
    radarDefaultSummary: "Mission capabilities for the selected country are summarized with visual scores.",
    sourceTrustEyebrow: "Source trust matrix",
    sourceTrustTitle: "Source Trust Score",
    sourceTrustDefaultSummary: "Preparing the source trust distribution for the country inventory.",
    alertEyebrow: "Command alerts",
    alertTitle: "Critical Inventory Alerts",
    alertDefaultSummary: "Preparing critical inventory signals for the selected country.",
    combatPlatforms: "Combat platforms",
    compareCountry: "Compare Country",
    countryInventoryFiltersAria: "Country inventory filters",
    allPlatformsShown: "All platforms are shown.",
    inspectCloseAria: "Close inspection panel",
    inspectImageAlt: "Inspected combat aircraft image",
    imageLoadFailed: "Image failed to load",
    platformInspect: "Platform inspection",
    inventoryNavAria: "Navigate within inventory",
    prevAircraftAria: "Previous aircraft",
    nextAircraftAria: "Next aircraft",
    aircraftNotSelected: "No combat aircraft selected",
    addFavorite: "Add Favorite",
    removeFavorite: "Remove Favorite",
    addCompare: "Add to Compare",
    removeCompare: "Remove from Compare",
    capabilityProfile: "Capability Profile",
    loadoutProfile: "Loadout profile",
    compatibleMunitions: "Compatible Munitions",
    inventoryContext: "Inventory Context",
    sourceVerification: "Sources and Verification",
    munitionCloseAria: "Close munition panel",
    munitionSubtitleDefault: "Open-source munition profile",
    munitionTitleDefault: "Munition Inventory",
    munitionFiltersAria: "Munition filters",
    selectedMunitionAlt: "Selected munition image",
    munitionDetailCard: "Munition info card",
    munitionNotSelected: "No munition selected",
    role: "Role",
    guidance: "Guidance",
    origin: "Origin",
    note: "Note",
    munitionCaveat:
      "Note: Lists represent known compatible or reportedly integrated munition families in open sources; user country, modernization package and certification status may vary.",
    authCloseAria: "Close panel",
    authEyebrow: "Secure access",
    authTitle: "User Panel",
    authTabsAria: "User actions",
    login: "Login",
    register: "Sign Up",
    email: "Email",
    password: "Password",
    loginSubmit: "Log In",
    forgotPassword: "Forgot Password",
    forgotPasswordNote: "Enter your registered email address to set a new password for the account stored in this browser.",
    forgotNewPassword: "New password",
    forgotNewPasswordRepeat: "Repeat new password",
    updatePassword: "Update Password",
    backToLogin: "Back to Login",
    username: "Username",
    passwordRepeat: "Repeat password",
    analysisProfile: "Analysis profile",
    neutralObserver: "Neutral observer",
    natoFocused: "NATO focused",
    bricsFocused: "BRICS focused",
    createAccount: "Create Account",
    accountTabsAria: "Account panel",
    profile: "Profile",
    settings: "Settings",
    activeSession: "Active session",
    saveProfile: "Save Profile",
    sessionSummaryAria: "Session summary",
    registeredAt: "Registered",
    lastCountry: "Last country",
    lastAircraft: "Last aircraft",
    defaultFilter: "Default filter",
    logout: "Log Out",
    defaultAllianceFilter: "Default alliance filter",
    inventoryDensity: "Inventory density",
    standard: "Standard",
    compact: "Compact",
    sessionStartup: "Session startup",
    rememberLast: "Remember last country and aircraft",
    defaultOpening: "Default opening",
    reduceMotion: "Reduce animations",
    highContrast: "High contrast",
    saveSettings: "Save Settings",
    authFootnote: "In this prototype, accounts are stored only in this browser.",
    footerSourceBackbone: "Source backbone:",
    selected: "selected",
    airPower: "Air Power",
    inventoryTitle: "Inventory",
    sourceData: "Data source",
    imageSource: "Image source",
    lastChecked: "Last checked",
    trustLevel: "Trust level",
    strongestArea: "Strongest area",
    lowBetter: "lower is better",
    noPlatforms: "No platforms",
    noCountries: "No countries",
    dataLastChecked: "June 2026",
  },
};

const commonsFile = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${COMMONS_IMAGE_WIDTH}`;

const commonsPage = (fileName) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll("%20", "_")}`;

function getUiText() {
  return UI_TEXT[state?.language] || UI_TEXT[DEFAULT_LANGUAGE];
}

function t(key, params = {}) {
  const value = getUiText()[key] ?? UI_TEXT[DEFAULT_LANGUAGE][key] ?? key;
  return String(value).replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function isEnglish() {
  return state?.language === "en";
}

function currentLocale() {
  return t("locale");
}

function dataLastCheckedText() {
  return t("dataLastChecked");
}

function optionLabel(item) {
  return isEnglish() && item?.labelEn ? item.labelEn : item?.label || "";
}

function platformCountText(count) {
  return isEnglish() ? `${count} ${count === 1 ? "platform" : "platforms"}` : `${count} platform`;
}

function munitionCountText(count) {
  return isEnglish() ? `${count} ${count === 1 ? "munition" : "munitions"}` : `${count} mühimmat`;
}

function categoryCountText(count) {
  return isEnglish() ? `${count} ${count === 1 ? "category" : "categories"}` : `${count} kategori`;
}

function signalCountText(count) {
  return isEnglish() ? `${count} ${count === 1 ? "signal" : "signals"}` : `${count} sinyal`;
}

function countryDisplayName(countryItem) {
  if (!countryItem) return "";
  return isEnglish() ? countryItem.englishName || countryItem.name : countryItem.name;
}

function countryDisplayLine(countryItem) {
  if (!countryItem) return "-";
  return `${countryDisplayName(countryItem)} (${countryItem.alliance})`;
}

function countryDescriptionText(countryItem) {
  if (!isEnglish() || !countryItem) return countryItem?.description || "";
  const platforms = countryItem.aircraft.map((aircraftId) => aircraftById.get(aircraftId)?.name).filter(Boolean);
  if (!platforms.length) {
    return `${countryDisplayName(countryItem)} is tracked as a ${countryItem.alliance} country, but the atlas does not list a permanent combat jet fleet for this profile.`;
  }

  const featured = platforms.slice(0, 4).join(", ");
  return `${countryDisplayName(countryItem)} is tracked under ${countryItem.alliance} with ${platformCountText(platforms.length)} in the atlas. Core platforms include ${featured}. The profile focuses on ${countryFocusText(countryItem).toLowerCase()}.`;
}

function countryFocusText(countryItem) {
  if (!isEnglish() || !countryItem) return countryItem?.focus || "";
  const focusText = normalize(countryItem.focus);
  if (focusText.includes("deniz")) return "naval aviation, carrier-capable operations and multirole reach";
  if (focusText.includes("stealth")) return "stealth, sensor fusion and multirole strike capacity";
  if (focusText.includes("hava savunmasi") || focusText.includes("hava ustunlugu")) {
    return "air defense, air superiority and quick reaction alert capacity";
  }
  if (focusText.includes("modernizasyon")) return "fleet modernization, sensors and weapons integration";
  if (focusText.includes("eski") || focusText.includes("yasli")) return "legacy fleet sustainment and selective modernization";
  if (focusText.includes("yakin destek")) return "strike, close air support and tactical support missions";
  if (focusText.includes("ada")) return "wide-area air policing and island geography coverage";
  return "mixed combat aviation, modernization and mission readiness";
}

function aircraftOriginText(aircraftItem) {
  if (!isEnglish() || !aircraftItem) return aircraftItem?.origin || "";
  const text = normalize(aircraftItem.origin);
  if (text.includes("abd")) return "U.S.-built";
  if (text.includes("rus")) return "Russian-built";
  if (text.includes("cin")) return "Chinese-built";
  if (text.includes("fransiz") || text.includes("fransa")) return "French-built";
  if (text.includes("avrupa")) return "European-built";
  if (text.includes("isvec")) return "Swedish-built";
  if (text.includes("ingiliz")) return "British-built";
  if (text.includes("turk")) return "Turkish-built";
  if (text.includes("hindistan")) return "Indian-built";
  if (text.includes("guney kore")) return "South Korean-built";
  if (text.includes("italyan")) return "Italian-built";
  if (text.includes("japon")) return "Japanese-built";
  return "Origin varies by platform";
}

function aircraftRoleText(aircraftItem) {
  if (!isEnglish() || !aircraftItem) return aircraftItem?.role || "";
  const text = normalize(`${aircraftItem.role} ${(aircraftItem.tags || []).join(" ")}`);
  const roles = [];
  if (hasAnyTerm(text, ["stealth", "dusuk gorunurluk", "5. nesil"])) roles.push("low-observable");
  if (hasAnyTerm(text, ["hava ustunlugu", "hava-hava", "interceptor", "agir av", "av "])) roles.push("air-superiority");
  if (hasAnyTerm(text, ["taarruz", "hava-yer", "bombardiman", "yakin destek", "sead"])) roles.push("strike");
  if (hasAnyTerm(text, ["deniz", "stovl", "ucak gemisi", "carrier"])) roles.push("naval-capable");
  if (hasAnyTerm(text, ["egitim", "hafif"])) roles.push("light/training");
  if (hasAnyTerm(text, ["elektronik", "harp", "jammer"])) roles.push("electronic warfare");
  if (!roles.length) roles.push("multirole");
  return `${aircraftItem.name} is a ${roles.join(", ")} combat aircraft in the atlas profile.`;
}

function aircraftTagText(tag) {
  if (!isEnglish()) return tag;
  const text = normalize(tag);
  if (text.includes("5. nesil")) return "5th gen";
  if (text.includes("4.5")) return "4.5 gen";
  if (text.includes("hava ustunlugu")) return "air superiority";
  if (text.includes("hava-hava")) return "air-to-air";
  if (text.includes("cok rollu")) return "multirole";
  if (text.includes("agir av")) return "heavy fighter";
  if (text.includes("taarruz")) return "strike";
  if (text.includes("deniz")) return "naval";
  if (text.includes("yakin destek")) return "close support";
  if (text.includes("sensor")) return "sensor fusion";
  if (text.includes("super seyir")) return "supercruise";
  if (text.includes("egitim")) return "training";
  if (text.includes("gelecek")) return "future";
  if (text.includes("legacy") || text.includes("eski")) return "legacy";
  return tag;
}

function confidenceLabelText(confidence) {
  const labels = aircraftConfidenceLabels[confidence] || aircraftConfidenceLabels.open;
  return isEnglish() && labels.labelEn ? labels.labelEn : labels.label;
}

function sourceTierText(value) {
  if (!isEnglish()) return value;
  const text = normalize(value);
  if (text.includes("resmi") && text.includes("acik kaynak")) return "Official/open-source platform cards";
  if (text.includes("resmi")) return "Official platform source";
  if (text.includes("program")) return "Program announcements / open sources";
  if (text.includes("tarihsel")) return "Open-source / historical fleet data";
  if (text.includes("varyant")) return "Open-source country-variant summary";
  if (text.includes("katalog")) return "Open-source platform catalog";
  return "Open-source platform summary";
}

function modernizationText(value, profile = null) {
  if (!isEnglish()) return value;
  if (profile?.confidence === "conditional") {
    return "Capability depends on delivery, maturity and integration timeline.";
  }
  if (profile?.confidence === "legacy") {
    return "Sustainment, parts availability and modernization status are the main constraints.";
  }
  const text = normalize(value);
  if (hasAnyTerm(text, ["aesa", "radar", "sensor", "aviyonik", "silah", "blok", "block"])) {
    return "Block level, sensors, avionics and weapon integration shape the capability reading.";
  }
  if (hasAnyTerm(text, ["deniz", "stovl", "ucak gemisi"])) {
    return "Naval integration and basing concept are central to the capability profile.";
  }
  return "Country-specific block and modernization details should be read with variant context.";
}

function profileNoteText(profile, selectedCountry, selectedAircraft) {
  if (!isEnglish()) return profile?.note || "";
  const countryName = countryDisplayName(selectedCountry);
  return `${profile?.displayName || selectedAircraft?.name || "This platform"} should be read in the ${countryName} variant context; country, block and modernization differences may change the final capability picture.`;
}

function signalDisplayLabel(label) {
  if (!isEnglish()) return label;
  return {
    "Hava-hava": "Air-to-air",
    Taarruz: "Strike",
    Stealth: "Stealth",
    Deniz: "Naval",
    Modernlik: "Modernity",
    Çeşitlilik: "Diversity",
    "Legacy riski": "Legacy risk",
    Genel: "General",
  }[label] || label;
}

function signalShortDisplayLabel(label) {
  if (!isEnglish()) {
    return {
      "Hava-hava": "H-H",
      Taarruz: "Taar.",
      Stealth: "Stl.",
      Deniz: "Deniz",
      Modernlik: "Mod.",
      Çeşitlilik: "Çeşit",
      "Legacy riski": "Risk",
    }[label] || label;
  }

  return {
    "Hava-hava": "A-A",
    Taarruz: "Str.",
    Stealth: "Stl.",
    Deniz: "Nav.",
    Modernlik: "Mod.",
    Çeşitlilik: "Div.",
    "Legacy riski": "Risk",
  }[label] || label;
}

function munitionCategoryText(categoryTitle) {
  if (!isEnglish()) return categoryTitle;
  const text = normalize(categoryTitle);
  if (text.includes("hava-hava")) return "Air-to-air";
  if (text.includes("hava-yer")) return "Air-to-ground";
  if (text.includes("stand-off") || text.includes("seyir")) return "Stand-off";
  if (text.includes("bomba")) return "Bombs";
  if (text.includes("roket")) return "Rockets";
  if (text.includes("top")) return "Guns";
  if (text.includes("pod")) return "Pods";
  return categoryTitle;
}

function munitionConfidenceLabelText(confidence) {
  if (!isEnglish()) return confidence.label;
  return {
    conditional: "Conditional compatibility",
    legacy: "Historical/legacy",
    active: "Open-source compatible",
  }[confidence.level] || confidence.label;
}

function munitionVisualLabelText(label) {
  if (!isEnglish()) return label;
  return {
    Füze: "Missile",
    Bomba: "Bomb",
    Roket: "Rocket",
    Top: "Gun",
    "Görev podu": "Mission pod",
    Mühimmat: "Munition",
  }[label] || label;
}

function munitionProfileSummaryText(profile, selectedAircraft) {
  if (!isEnglish()) return profile.summary;
  return `${selectedAircraft.name} loadout profile groups ${categoryCountText(profile.categories.length)} and ${munitionCountText(
    countMunitions(profile),
  )} known or reported munition entries. Compatibility depends on user country, block level and certification status.`;
}

function munitionStatusText(value) {
  if (!isEnglish()) return value;
  const text = normalize(value);
  if (text.includes("modernizasyon") || text.includes("blok")) return "Block and modernization dependent";
  if (text.includes("ulke") || text.includes("kullanici")) return "User-country dependent";
  if (text.includes("acik kaynak")) return "Open-source compatibility reading";
  return "Open-source / integration dependent";
}

function munitionDetailDescriptionText(detail, categoryTitle) {
  if (!isEnglish()) return detail.description;
  const category = munitionCategoryText(categoryTitle).toLowerCase();
  return `${detail.name} is shown as a ${category} munition family in the atlas. Integration can vary by aircraft variant, user country and modernization package.`;
}

function munitionRoleText(detail, categoryTitle) {
  if (!isEnglish()) return detail.role;
  const text = normalize(`${detail.role} ${categoryTitle} ${detail.name}`);
  if (hasAnyTerm(text, ["hava-hava", "air-to-air", "aam", "aim-", "meteor", "sidewinder"])) return "Air-to-air engagement";
  if (hasAnyTerm(text, ["stand-off", "seyir", "cruise", "anti-gemi", "anti-radyasyon"])) return "Stand-off / specialized strike";
  if (hasAnyTerm(text, ["bomba", "bomb", "gbu", "jdam", "paveway"])) return "Air-to-ground bomb family";
  if (hasAnyTerm(text, ["roket", "rocket"])) return "Rocket family";
  if (hasAnyTerm(text, ["top", "gun", "cannon"])) return "Aircraft gun / cannon layer";
  if (hasAnyTerm(text, ["pod", "hedefleme", "kesif"])) return "Mission support payload";
  return "Tactical munition";
}

function munitionGuidanceText(detail) {
  if (!isEnglish()) return detail.guidance;
  const text = normalize(detail.guidance);
  if (hasAnyTerm(text, ["lazer", "laser"])) return "Laser-guided";
  if (hasAnyTerm(text, ["gps", "ins"])) return "GPS/INS";
  if (hasAnyTerm(text, ["radar"])) return "Radar-guided";
  if (hasAnyTerm(text, ["kizilotesi", "infrared", "ir"])) return "Infrared";
  if (hasAnyTerm(text, ["balistik", "unguided", "gudumsuz"])) return "Ballistic / unguided";
  if (hasAnyTerm(text, ["sensor", "elektronik"])) return "Sensor/electronic system";
  return "Variant dependent";
}

function munitionOriginText(detail) {
  if (!isEnglish()) return detail.origin;
  return "Varies by weapon family and user configuration";
}

function munitionNoteText(detail) {
  if (!isEnglish()) return detail.note;
  return "This card gives a general technical reading; aircraft, country and block-level integration should be verified separately.";
}

function textForDataStatus(value) {
  if (!isEnglish()) return value;
  return String(value || "")
    .replaceAll("Açık kaynak okuması", "Open-source reading")
    .replaceAll("Sınırlı veri", "Limited data")
    .replaceAll("Haziran 2026", dataLastCheckedText());
}

const aircraft = {
  f35a: jet({
    name: "F-35A Lightning II",
    origin: "ABD üretimi",
    role: "Düşük görünürlüklü, sensör füzyonuna dayalı çok rollü muharip uçak.",
    speed: "Mach 1.6",
    range: "1.200+ deniz mili",
    ceiling: "50.000+ ft",
    crew: "1",
    tags: ["5. nesil", "Stealth", "Sensör füzyonu", "Çok rollü"],
    note: "F-35A, NATO ülkelerinde ortak lojistik ve görev veri paylaşımı açısından öne çıkan ana beşinci nesil platformlardan biridir.",
    file: "An F-35A Lightning II.jpg",
  }),
  f35b: jet({
    name: "F-35B Lightning II",
    origin: "ABD üretimi",
    role: "Kısa kalkış/dikey iniş kabiliyeti bulunan stealth çok rollü platform.",
    speed: "Mach 1.6",
    range: "900+ deniz mili",
    ceiling: "50.000+ ft",
    crew: "1",
    tags: ["5. nesil", "STOVL", "Deniz konuşlu", "Çok rollü"],
    note: "F-35B, küçük güverteli gemilerden harekat yapabilmesiyle özellikle deniz kuvvetleri entegrasyonunda farklılaşır.",
    file: "F-35B Lightning II (168717) at the Farnborough Airshow 2016.jpg",
  }),
  f35c: jet({
    name: "F-35C Lightning II",
    origin: "ABD üretimi",
    role: "Uçak gemisi operasyonları için güçlendirilmiş beşinci nesil stealth çok rollü savaş uçağı.",
    speed: "Mach 1.6",
    range: "1.200+ deniz mili",
    ceiling: "50.000+ ft",
    crew: "1",
    tags: ["5. nesil", "Stealth", "Deniz konuşlu", "Çok rollü"],
    note: "F-35C, daha büyük kanat ve güçlendirilmiş iniş takımıyla ABD uçak gemisi hava kanatlarının stealth katmanını oluşturur.",
    file: "F-35C Lightning II launches from USS Dwight D. Eisenhower (CVN-69) in October 2015.JPG",
  }),
  f22: jet({
    name: "F-22A Raptor",
    origin: "ABD üretimi",
    role: "Hava üstünlüğü için tasarlanmış beşinci nesil stealth av uçağı.",
    speed: "Mach 2+",
    range: "1.600 deniz mili ferry",
    ceiling: "50.000+ ft",
    crew: "1",
    tags: ["5. nesil", "Hava üstünlüğü", "Süper seyir", "Stealth"],
    note: "F-22 ihracata kapalıdır; bu yüzden ittifak içinde sadece ABD envanterinde yer alır.",
    file: "F-22 Raptor - 100201-F-7443P-570.jpg",
  }),
  f15ex: jet({
    name: "F-15EX Eagle II",
    origin: "ABD üretimi",
    role: "Yüksek faydalı yük ve uzun menzilli hava-hava/taarruz görevleri için modernize edilmiş ağır av uçağı.",
    speed: "Mach 2.5 sınıfı",
    range: "2.000+ deniz mili ferry",
    ceiling: "60.000 ft",
    crew: "1 veya 2",
    tags: ["Ağır av", "Yüksek mühimmat", "Hava üstünlüğü", "Taarruz"],
    note: "F-15 ailesi, büyük radar, yüksek hız ve mühimmat kapasitesiyle dördüncü nesil üstü görevlerde güçlü kalır.",
    file: "F-15EX Eagle II.jpg",
  }),
  f15sa: jet({
    name: "F-15SA / F-15S",
    origin: "ABD üretimi",
    role: "Suudi Arabistan tarafından kullanılan gelişmiş F-15 türevi ağır çok rollü platform.",
    speed: "Mach 2+",
    range: "Uzun menzil",
    ceiling: "60.000 ft",
    crew: "2",
    tags: ["Ağır av", "Taarruz", "Uzun menzil", "Çok rollü"],
    note: "F-15SA, modern aviyonik ve yüksek mühimmat kapasitesiyle Körfez hava gücü mimarisinde merkezi bir platformdur.",
    file: "Boeing F-15SA Eagle Royal Saudi Air Force 5D4 2291 (53919688252).jpg",
  }),
  f15e: jet({
    name: "F-15E Strike Eagle",
    origin: "ABD üretimi",
    role: "Derin taarruz, hava-hava ve gece/all-weather görevleri için iki kişilik ağır çok rollü savaş uçağı.",
    speed: "Mach 2.5 sınıfı",
    range: "2.000+ deniz mili ferry",
    ceiling: "60.000 ft",
    crew: "2",
    tags: ["Ağır av", "Derin taarruz", "İki kişilik", "Çok rollü"],
    note: "F-15E, F-15 ailesinin taarruz odaklı koludur; uzun menzil, yüksek mühimmat yükü ve iki kişilik görev yönetimiyle öne çıkar.",
    file: "F-15E Strike Eagle assigned to the 494th Fighter Squadron.jpg",
  }),
  f15c: jet({
    name: "F-15C/D Eagle",
    origin: "ABD üretimi",
    role: "Hava üstünlüğü için geliştirilen klasik ağır av uçağı ailesi.",
    speed: "Mach 2.5 sınıfı",
    range: "1.900+ deniz mili ferry",
    ceiling: "60.000+ ft",
    crew: "1 veya 2",
    tags: ["Hava üstünlüğü", "Ağır av", "Klasik platform", "Uzun menzil"],
    note: "F-15C/D, birçok kullanıcıda F-15EX veya F-35 geçişine rağmen hava üstünlüğü mirasının temel platformlarından biri olarak temsil edilir.",
    file: "F-15C Eagle from the 493rd Fighter Squadron.jpg",
  }),
  f16: jet({
    name: "F-16 Fighting Falcon",
    origin: "ABD üretimi",
    role: "Tek motorlu, çevik ve yaygın kullanılan çok rollü savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "2.000+ deniz mili ferry",
    ceiling: "50.000+ ft",
    crew: "1 veya 2",
    tags: ["4. nesil", "Çok rollü", "Yaygın platform", "Modernizasyon"],
    note: "F-16, NATO içinde müşterek eğitim, yedek parça ve modernizasyon ekosistemi en güçlü platformlardan biridir.",
    file: "F-16 Fighting Falcon (6023428).jpg",
  }),
  f16ef: jet({
    name: "F-16E/F Block 60",
    origin: "ABD/BAE konfigürasyonu",
    role: "BAE için geliştirilmiş gelişmiş sensör ve aviyonik paketli F-16 türevi.",
    speed: "Mach 2 sınıfı",
    range: "2.000+ deniz mili ferry",
    ceiling: "50.000+ ft",
    crew: "1 veya 2",
    tags: ["4.5 nesil", "Çok rollü", "AESA radar", "Körfez"],
    note: "F-16E/F Block 60, BAE filosunda F-16 ailesinin en gelişmiş ihracat konfigürasyonlarından biri olarak yer alır.",
    file: "F-16E from the United Arab Emirates.jpg",
  }),
  a10c: jet({
    name: "A-10C Thunderbolt II",
    origin: "ABD üretimi",
    role: "Yakın hava desteği, zırhlı hedef taarruzu ve düşük irtifa muharebe desteği için dayanıklı taarruz uçağı.",
    speed: "Transonik altı",
    range: "2.200+ deniz mili ferry",
    ceiling: "45.000 ft",
    crew: "1",
    tags: ["Yakın destek", "Taarruz", "Dayanıklı platform", "Top silahı"],
    note: "A-10C klasik anlamda av uçağı değildir; fakat ABD muharip uçak ekosisteminde yakın hava desteği rolünün en belirgin platformudur.",
    file: "A-10 Thunderbolt II In-flight-2.jpg",
  }),
  fa18: jet({
    name: "F/A-18E/F Super Hornet",
    origin: "ABD üretimi",
    role: "Uçak gemisi konuşlu çok rollü deniz av/taarruz uçağı.",
    speed: "Mach 1.8",
    range: "1.200+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1 veya 2",
    tags: ["Deniz konuşlu", "Çok rollü", "Taarruz", "Hava-hava"],
    note: "Super Hornet, ABD Deniz Kuvvetleri'nin uçak gemisi hava kanatlarında omurga platformlardan biridir.",
    file: "F-A-18F Super Hornet from VFA-102 launches from USS Kitty Hawk (CV-63) 2005.jpg",
  }),
  f18hornet: jet({
    name: "F/A-18 Hornet",
    origin: "ABD üretimi",
    role: "Eski nesil ama modernize edilmiş çift motorlu deniz kökenli çok rollü savaş uçağı.",
    speed: "Mach 1.8",
    range: "1.800+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1 veya 2",
    tags: ["Çok rollü", "Deniz kökenli", "Hava savunması", "Taarruz"],
    note: "Legacy Hornet ailesi, Finlandiya ve İspanya gibi NATO kullanıcılarında F-35 veya yeni nesil platform geçişine kadar önemli rol oynar.",
    file: "F-A-18C Hornet VFA-94 2006.jpg",
  }),
  ea18g: jet({
    name: "EA-18G Growler",
    origin: "ABD üretimi",
    role: "F/A-18F temelli elektronik taarruz ve hava savunma bastırma platformu.",
    speed: "Mach 1.8",
    range: "1.200+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "2",
    tags: ["Elektronik harp", "Deniz konuşlu", "SEAD", "F/A-18 ailesi"],
    note: "EA-18G, klasik av uçağı rolünden çok elektronik taarruz katmanını temsil eder; modern hava harekatında paket koruması için kritik bir platformdur.",
    file: "EA-18G Growler VAQ-129 NAS Whidbey Island 2011.jpg",
  }),
  cf18: jet({
    name: "CF-18 Hornet",
    origin: "ABD/Kanada hizmeti",
    role: "Kanada tarafından kullanılan F/A-18 Hornet türevi çok rollü savaş uçağı.",
    speed: "Mach 1.8",
    range: "1.800+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1 veya 2",
    tags: ["Çok rollü", "Kuzey hava savunması", "Hava-hava", "Taarruz"],
    note: "CF-18 filosu, F-35A geçişi tamamlanana kadar Kanada'nın ana muharip jet kapasitesi olarak görev yapar.",
    file: "Canadian Forces CF-18 Hornet, CFB Cold Lake, Alberta.jpg",
  }),
  typhoon: jet({
    name: "Eurofighter Typhoon",
    origin: "Avrupa ortak üretimi",
    role: "Hava üstünlüğü odağı güçlü, çok rollü delta-kanat Avrupa savaş uçağı.",
    speed: "Mach 2",
    range: "1.500+ deniz mili ferry",
    ceiling: "55.000 ft",
    crew: "1 veya 2",
    tags: ["4.5 nesil", "Hava üstünlüğü", "Çok rollü", "Avrupa"],
    note: "Typhoon, Birleşik Krallık, Almanya, İtalya ve İspanya gibi NATO hava kuvvetlerinde ortak Avrupa kabiliyeti sağlar.",
    file: "Eurofighter Typhoon.jpg",
  }),
  rafale: jet({
    name: "Dassault Rafale",
    origin: "Fransa üretimi",
    role: "Çok rollü, deniz ve kara konuşlu görevleri destekleyen Fransız savaş uçağı.",
    speed: "Mach 1.8",
    range: "2.000+ deniz mili ferry",
    ceiling: "50.000+ ft",
    crew: "1 veya 2",
    tags: ["4.5 nesil", "Çok rollü", "Taarruz", "Deniz opsiyonu"],
    note: "Rafale, Fransa'nın nükleer caydırıcılık dahil geniş görev yelpazesinde kullandığı ana muharip platformdur.",
    file: "Dassault Rafale.jpg",
  }),
  gripen: jet({
    name: "Saab JAS 39 Gripen",
    origin: "İsveç üretimi",
    role: "Kısa pistlerden çalışabilen, bakım yükü düşük çok rollü savaş uçağı.",
    speed: "Mach 2",
    range: "1.700+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1 veya 2",
    tags: ["4.5 nesil", "Dağınık üs", "Çok rollü", "Düşük bakım"],
    note: "Gripen, dağınık üs ve hızlı dönüş konseptiyle kuzey Avrupa savunma mimarisine uyumlu tasarlanmıştır.",
    file: "Saab JAS-39 Gripen (53079182499).jpg",
  }),
  tornado: jet({
    name: "Panavia Tornado",
    origin: "Avrupa ortak üretimi",
    role: "Düşük irtifa taarruz ve elektronik harp görevlerinde kullanılan çift motorlu platform.",
    speed: "Mach 2.2",
    range: "2.000+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "2",
    tags: ["Taarruz", "Elektronik harp", "Değişken kanat", "Geçiş dönemi"],
    note: "Tornado filoları birçok ülkede yaşlanmış olsa da bazı NATO hava kuvvetlerinde geçiş sürecinde görev görür.",
    file: "RAF Tornado GR4 MOD 45155518.jpg",
  }),
  f4: jet({
    name: "F-4E Phantom II",
    origin: "ABD üretimi",
    role: "Modernize edilmiş yaşlı av-bombardıman platformu.",
    speed: "Mach 2.2",
    range: "1.400+ deniz mili ferry",
    ceiling: "60.000 ft",
    crew: "2",
    tags: ["Klasik platform", "Taarruz", "Modernizasyon", "İki kişilik"],
    note: "F-4 ailesi birçok ülkede emekliye ayrıldı; kalan filolar daha çok geçiş veya özel görev ihtiyacını karşılar.",
    file: "F-4E Phantom II 71-0237.jpg",
  }),
  mig29: jet({
    name: "MiG-29 Fulcrum",
    origin: "Sovyet/Rus üretimi",
    role: "Kısa-orta menzilli hava-hava görevlerine odaklı çift motorlu av uçağı.",
    speed: "Mach 2.25",
    range: "1.100+ deniz mili ferry",
    ceiling: "59.000 ft",
    crew: "1 veya 2",
    tags: ["4. nesil", "Hava-hava", "Çift motor", "Eski bloklar"],
    note: "MiG-29, bazı NATO ve BRICS dışı filolarda geçiş platformu olarak kalırken modern türevleri farklı görev setlerine uyarlanmıştır.",
    file: "Mikoyan-Gurevich MiG-29 9-13 in flight over Kubinka airfield.jpg",
  }),
  mig29k: jet({
    name: "MiG-29K Fulcrum-D",
    origin: "Rusya üretimi",
    role: "Uçak gemisi operasyonları için geliştirilmiş MiG-29 ailesi deniz konuşlu çok rollü savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "1.100+ deniz mili ferry",
    ceiling: "57.000 ft",
    crew: "1 veya 2",
    tags: ["Deniz konuşlu", "Çok rollü", "MiG-29 ailesi", "Hindistan"],
    note: "MiG-29K, Hindistan deniz havacılığında uçak gemisi merkezli muharip jet kapasitesini temsil eder.",
    file: "MiG-29K of Indian Navy at MAKS-2011 airshow.jpg",
  }),
  mig35: jet({
    name: "MiG-35 Fulcrum-F",
    origin: "Rusya üretimi",
    role: "MiG-29 ailesinin modernize edilmiş, çok rollü ve gelişmiş aviyonikli türevi.",
    speed: "Mach 2+",
    range: "1.300+ deniz mili ferry",
    ceiling: "57.000 ft",
    crew: "1 veya 2",
    tags: ["4.5 nesil", "Çok rollü", "MiG ailesi", "Modernizasyon"],
    note: "MiG-35 sayısal olarak Su-30/35 ailesi kadar yaygın değildir; ancak Rus modern hafif/orta sınıf av uçağı katmanını gösterir.",
    file: "MiG-35D MAKS 2017.jpg",
  }),
  mig31: jet({
    name: "MiG-31 Foxhound",
    origin: "Sovyet/Rus üretimi",
    role: "Uzun menzilli önleme ve yüksek hızlı devriye görevleri için ağır interceptor.",
    speed: "Mach 2.8 sınıfı",
    range: "1.600+ deniz mili ferry",
    ceiling: "67.000 ft",
    crew: "2",
    tags: ["Interceptor", "Uzun menzil", "Yüksek hız", "Ağır platform"],
    note: "MiG-31, geniş hava sahası gözetleme ve uzun menzilli önleme görevlerinde Rusya'ya özgü bir kapasite sunar.",
    file: "Russian Air Force MiG-31BM in 2012.jpg",
  }),
  su57: jet({
    name: "Sukhoi Su-57",
    origin: "Rusya üretimi",
    role: "Rusya'nın beşinci nesil düşük görünürlüklü çok rollü savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "1.800+ deniz mili ferry",
    ceiling: "60.000+ ft",
    crew: "1",
    tags: ["5. nesil", "Stealth", "Çok rollü", "Rusya"],
    note: "Su-57 sayısal olarak sınırlı fakat Rusya'nın beşinci nesil kabiliyet gösterimi açısından kritik platformdur.",
    file: "Sukhoi Su-57 in 2018.jpg",
  }),
  su35: jet({
    name: "Sukhoi Su-35S",
    origin: "Rusya üretimi",
    role: "Yüksek manevra kabiliyeti ve güçlü radar taşıyan 4.5 nesil ağır av uçağı.",
    speed: "Mach 2.25",
    range: "1.900+ deniz mili ferry",
    ceiling: "59.000 ft",
    crew: "1",
    tags: ["4.5 nesil", "Hava üstünlüğü", "Süper manevra", "Ağır av"],
    note: "Su-35S, Rusya ve bazı ihracat müşterileri için hava üstünlüğü görevlerinde öne çıkan platformdur.",
    file: "Sukhoi Su-35 ‘701 blue’ (27581207929).jpg",
  }),
  su30sm: jet({
    name: "Sukhoi Su-30SM",
    origin: "Rusya üretimi",
    role: "İki kişilik, uzun menzilli çok rollü ağır savaş uçağı.",
    speed: "Mach 2",
    range: "1.600+ deniz mili ferry",
    ceiling: "56.000 ft",
    crew: "2",
    tags: ["Çok rollü", "Ağır av", "Taarruz", "İki kişilik"],
    note: "Su-30 ailesi, geniş menzil ve mühimmat çeşitliliğiyle BRICS tarafında sık görülen ağır platformlardan biridir.",
    file: "Sukhoi Su-30SM in flight 2014.jpg",
  }),
  su30mki: jet({
    name: "Sukhoi Su-30MKI",
    origin: "Hindistan/Rusya üretimi",
    role: "Hindistan'a özgü aviyoniklerle uyarlanmış çift motorlu çok rollü ağır savaş uçağı.",
    speed: "Mach 2",
    range: "1.600+ deniz mili ferry",
    ceiling: "56.000 ft",
    crew: "2",
    tags: ["Çok rollü", "Ağır av", "Hindistan", "Süper manevra"],
    note: "Su-30MKI, Hindistan Hava Kuvvetleri'nin sayısal ve menzil omurgasını oluşturan başlıca platformdur.",
    file: "Sukhoi Su-30MKi.jpg",
  }),
  su34: jet({
    name: "Sukhoi Su-34",
    origin: "Rusya üretimi",
    role: "Uzun menzilli taktik bombardıman ve taarruz platformu.",
    speed: "Mach 1.8",
    range: "2.000+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "2",
    tags: ["Taarruz", "Ağır platform", "Uzun menzil", "Çift koltuk"],
    note: "Su-34, av uçağından çok taarruz/bombardıman görevleri için optimize edilmiş bir platformdur.",
    file: "Sukhoi Su-34 (34483355822).jpg",
  }),
  su33: jet({
    name: "Sukhoi Su-33",
    origin: "Rusya üretimi",
    role: "Su-27 ailesinden türeyen uçak gemisi konuşlu ağır av uçağı.",
    speed: "Mach 2 sınıfı",
    range: "1.600+ deniz mili ferry",
    ceiling: "56.000 ft",
    crew: "1",
    tags: ["Deniz konuşlu", "Ağır av", "Su-27 ailesi", "Hava üstünlüğü"],
    note: "Su-33, Rus deniz havacılığının sınırlı ama ayırt edici uçak gemisi av uçağı kapasitesini temsil eder.",
    file: "Sukhoi Su-33 on Admiral Kuznetsov aircraft carrier.jpg",
  }),
  su24: jet({
    name: "Sukhoi Su-24M Fencer",
    origin: "Sovyet/Rus üretimi",
    role: "Düşük irtifa taarruz, taktik bombardıman ve deniz hedeflerine saldırı görevleri için değişken kanatlı platform.",
    speed: "Mach 2 sınıfı",
    range: "1.500+ deniz mili ferry",
    ceiling: "36.000+ ft",
    crew: "2",
    tags: ["Taarruz", "Taktik bombardıman", "Değişken kanat", "Eski platform"],
    note: "Su-24, modern av uçağı değildir; fakat Rusya ve bazı bölgesel kullanıcıların taarruz envanterinde hâlâ tarihsel ağırlığı olan bir platformdur.",
    file: "Sukhoi Su-24M in flight 2009.jpg",
  }),
  su25: jet({
    name: "Sukhoi Su-25 Frogfoot",
    origin: "Sovyet/Rus üretimi",
    role: "Yakın hava desteği ve kara hedeflerine dayanıklı düşük irtifa taarruz uçağı.",
    speed: "Transonik altı",
    range: "1.000+ deniz mili ferry",
    ceiling: "23.000 ft",
    crew: "1",
    tags: ["Yakın destek", "Taarruz", "Dayanıklı platform", "Kara hedefleri"],
    note: "Su-25, A-10 gibi klasik hava üstünlüğü değil yakın destek katmanını temsil eder; özellikle Rus/Sovyet kökenli filolarda yaygındır.",
    file: "Sukhoi Su-25 in flight 2013.jpg",
  }),
  j20: jet({
    name: "Chengdu J-20",
    origin: "Çin üretimi",
    role: "Çin'in beşinci nesil stealth hava üstünlüğü ve uzun menzilli görev platformu.",
    speed: "Mach 2 sınıfı",
    range: "Uzun menzil",
    ceiling: "60.000 ft sınıfı",
    crew: "1",
    tags: ["5. nesil", "Stealth", "Hava üstünlüğü", "Uzun menzil"],
    note: "J-20, Çin'in modern hava gücü dönüşümünde en görünür beşinci nesil platformdur.",
    file: "J-20 (cropped).jpg",
  }),
  j16: jet({
    name: "Shenyang J-16",
    origin: "Çin üretimi",
    role: "Ağır çok rollü taarruz ve hava-hava platformu.",
    speed: "Mach 2 sınıfı",
    range: "Uzun menzil",
    ceiling: "56.000 ft sınıfı",
    crew: "2",
    tags: ["Ağır av", "Taarruz", "Elektronik harp türevi", "Çok rollü"],
    note: "J-16, yüksek mühimmat taşıma ve modern sensör yapısıyla Çin'in 4.5 nesil ağır platform ailesini temsil eder.",
    file: "Chinese Air Force, 61248, Shenyang J-16 (51524684603).jpg",
  }),
  j10c: jet({
    name: "Chengdu J-10C",
    origin: "Çin üretimi",
    role: "Tek motorlu, modern radar ve füze entegrasyonu taşıyan çok rollü av uçağı.",
    speed: "Mach 1.8+",
    range: "Orta menzil",
    ceiling: "55.000 ft sınıfı",
    crew: "1",
    tags: ["4.5 nesil", "Çok rollü", "Tek motor", "Modern radar"],
    note: "J-10C, Çin'in daha hafif ve sayıca ölçeklenebilir modern muharip jet katmanını oluşturur.",
    file: "Chinese Air Force Chengdu J-10C in 2022.jpg",
  }),
  j11: jet({
    name: "Shenyang J-11",
    origin: "Çin üretimi",
    role: "Su-27 temelinden türeyen çift motorlu ağır hava üstünlüğü savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "Uzun menzil",
    ceiling: "59.000 ft sınıfı",
    crew: "1",
    tags: ["Ağır av", "Hava üstünlüğü", "Su-27 ailesi", "Çin"],
    note: "J-11, Çin'in Su-27 mirasını yerli üretim ve modernizasyonla genişlettiği ağır av katmanını temsil eder.",
    file: "Chinese-j-11.jpg",
  }),
  j15: jet({
    name: "Shenyang J-15 Flying Shark",
    origin: "Çin üretimi",
    role: "Çin uçak gemileri için geliştirilmiş ağır deniz konuşlu çok rollü savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "Uzun menzil",
    ceiling: "56.000 ft sınıfı",
    crew: "1 veya 2",
    tags: ["Deniz konuşlu", "Ağır av", "Uçak gemisi", "Çin"],
    note: "J-15, Çin deniz havacılığının uçak gemisi muharip jet kabiliyetini görünür kılan ana platformdur.",
    file: "PLAN Shenyang J-15 carrier-based fighter aircraft 20220504.jpg",
  }),
  jh7a: jet({
    name: "Xi'an JH-7A Flying Leopard",
    origin: "Çin üretimi",
    role: "Deniz ve kara hedeflerine taarruz için kullanılan iki kişilik av-bombardıman uçağı.",
    speed: "Mach 1.7 sınıfı",
    range: "Uzun menzil",
    ceiling: "50.000 ft sınıfı",
    crew: "2",
    tags: ["Taarruz", "Av-bombardıman", "Deniz hedefleri", "Çift koltuk"],
    note: "JH-7A, J-20/J-16 kadar yeni olmasa da Çin'in taarruz ve deniz hedefleme katmanında önemli bir rol oynar.",
    file: "Xian JH-7A.jpg",
  }),
  su30mkk: jet({
    name: "Sukhoi Su-30MKK/MK2",
    origin: "Rusya üretimi",
    role: "Çin ve Endonezya gibi kullanıcılara ihraç edilen uzun menzilli iki kişilik çok rollü ağır savaş uçağı.",
    speed: "Mach 2 sınıfı",
    range: "1.600+ deniz mili ferry",
    ceiling: "56.000 ft",
    crew: "2",
    tags: ["Ağır av", "Çok rollü", "İhracat", "Su-30 ailesi"],
    note: "Su-30MKK/MK2, Su-30 ailesinin ihracat kolu olarak Çin ve Endonezya gibi geniş coğrafyalı hava güçlerinde görev yapar.",
    file: "Sukhoi Su-30MKK.jpg",
  }),
  tejas: jet({
    name: "HAL Tejas",
    origin: "Hindistan üretimi",
    role: "Hindistan'ın yerli hafif çok rollü savaş uçağı.",
    speed: "Mach 1.6",
    range: "Orta menzil",
    ceiling: "50.000 ft sınıfı",
    crew: "1",
    tags: ["Hafif av", "Yerli üretim", "Çok rollü", "Tek motor"],
    note: "Tejas, Hindistan'ın yerli savaş uçağı üretim kabiliyetini genişleten stratejik bir programdır.",
    file: "HAL Tejas (LA-5018) of Indian Air Force.jpg",
  }),
  jaguar: jet({
    name: "SEPECAT Jaguar",
    origin: "İngiltere/Fransa üretimi",
    role: "Düşük irtifa taarruz ve yakın destek görevlerinde kullanılan çift motorlu saldırı uçağı.",
    speed: "Mach 1.6 sınıfı",
    range: "Orta menzil",
    ceiling: "45.000 ft sınıfı",
    crew: "1 veya 2",
    tags: ["Taarruz", "Düşük irtifa", "Klasik platform", "Hindistan"],
    note: "Jaguar, Hindistan'da yaşlanan ama taarruz görevleri için modernizasyonlarla sürdürülen klasik bir platformdur.",
    file: "Indian Air Force Sepecat Jaguar with Harpoon Anti-ship missile.jpg",
  }),
  mirage2000: jet({
    name: "Mirage 2000",
    origin: "Fransa üretimi",
    role: "Delta-kanat, tek motorlu çok rollü savaş uçağı.",
    speed: "Mach 2.2",
    range: "1.800+ deniz mili ferry",
    ceiling: "59.000 ft",
    crew: "1 veya 2",
    tags: ["4. nesil", "Çok rollü", "Hava-hava", "Taarruz"],
    note: "Mirage 2000, modernize edilmiş paketlerle bazı hava kuvvetlerinde hâlâ etkin görev setleri yürütür.",
    file: "Dassault Mirage 2000C in flight 051023-F-1234P-007.jpg",
  }),
  mirage20009: jet({
    name: "Mirage 2000-9",
    origin: "Fransa/BAE modernizasyonu",
    role: "BAE için geliştirilmiş gelişmiş Mirage 2000 çok rollü türevi.",
    speed: "Mach 2.2",
    range: "Uzun ferry menzili",
    ceiling: "59.000 ft",
    crew: "1 veya 2",
    tags: ["Modernizasyon", "Çok rollü", "Taarruz", "Körfez"],
    note: "Mirage 2000-9, BAE'nin F-16E/F filosunu tamamlayan gelişmiş bir Fransız platformudur.",
    file: "UAE Air Force Mirage 2000-9 at Dubai Airshow 2007.jpg",
  }),
  fa50: jet({
    name: "FA-50 Fighting Eagle",
    origin: "Güney Kore üretimi",
    role: "Hafif taarruz ve gelişmiş eğitim uçağı.",
    speed: "Mach 1.5",
    range: "1.000+ deniz mili ferry",
    ceiling: "48.000 ft",
    crew: "2",
    tags: ["Hafif taarruz", "Eğitim", "Geçiş platformu", "Çok rollü"],
    note: "FA-50, ana muharip jetlere geçişte maliyet etkin eğitim ve hafif taarruz kapasitesi sağlar.",
    file: "KAI FA-50 Fighting Eagle landing at Radom Air Show 2023.jpg",
  }),
  l159: jet({
    name: "Aero L-159 ALCA",
    origin: "Çekya üretimi",
    role: "Hafif taarruz ve ileri eğitim platformu.",
    speed: "Mach 0.75",
    range: "850+ deniz mili ferry",
    ceiling: "43.000 ft",
    crew: "1 veya 2",
    tags: ["Hafif taarruz", "Eğitim", "Yakın destek", "Çekya"],
    note: "L-159, yoğun hava-hava görevlerinden çok eğitim, hafif taarruz ve destek rolünde kullanılır.",
    file: "Aero L-159A ALCA Czech Air Force.jpg",
  }),
  f5: jet({
    name: "F-5EM/FM Tiger II",
    origin: "ABD üretimi / Brezilya modernizasyonu",
    role: "Modernize edilmiş hafif av ve eğitim platformu.",
    speed: "Mach 1.6",
    range: "1.400+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1 veya 2",
    tags: ["Hafif av", "Modernizasyon", "Geçiş platformu", "Eski gövde"],
    note: "F-5 modernizasyonları, yeni nesil platformlar tam devreye girene kadar hava savunma görevini destekler.",
    file: "Brazilian Air Force F-5EM Tiger II.jpg",
  }),
  amx: jet({
    name: "AMX A-1",
    origin: "İtalya/Brezilya üretimi",
    role: "Hafif taarruz ve yakın hava desteği uçağı.",
    speed: "Transonik",
    range: "Orta menzil",
    ceiling: "43.000 ft sınıfı",
    crew: "1 veya 2",
    tags: ["Hafif taarruz", "Yakın destek", "Brezilya", "Geçiş dönemi"],
    note: "AMX, Gripen E geçişiyle birlikte Brezilya hava gücünde daha sınırlı bir role doğru ilerler.",
    file: "AMX A-1A Brazilian Air Force.jpg",
  }),
  harrier: jet({
    name: "AV-8B Harrier II",
    origin: "ABD/İngiltere kökenli",
    role: "Dikey/kısa kalkış kabiliyeti bulunan deniz konuşlu taarruz uçağı.",
    speed: "Transonik",
    range: "1.100+ deniz mili ferry",
    ceiling: "50.000 ft",
    crew: "1",
    tags: ["STOVL", "Deniz konuşlu", "Taarruz", "Geçiş dönemi"],
    note: "Harrier, F-35B öncesi STOVL deniz havacılığının klasik platformlarından biridir.",
    file: "AV-8B Harrier II at RIAT 2005.jpg",
  }),
  kaan: jet({
    name: "TUSAŞ KAAN",
    origin: "Türkiye üretimi",
    role: "Geliştirme aşamasındaki beşinci nesil milli muharip uçak programı.",
    speed: "Hedef: süpersonik",
    range: "Açık veri sınırlı",
    ceiling: "Açık veri sınırlı",
    crew: "1",
    tags: ["Geliştirme", "5. nesil hedefi", "Yerli program", "Prototip"],
    note: "KAAN aktif envanter platformu olarak değil, Türkiye'nin gelecek nesil muharip uçak programı olarak gösterilir.",
    file: "TAI TF Kaan at Teknofest 2023.jpg",
  }),
  f14: jet({
    name: "F-14 Tomcat",
    origin: "ABD üretimi",
    role: "Uzun menzilli önleme için tasarlanmış değişken kanatlı ağır av uçağı.",
    speed: "Mach 2.3",
    range: "1.600+ deniz mili ferry",
    ceiling: "50.000+ ft",
    crew: "2",
    tags: ["Interceptor", "Ağır av", "Klasik platform", "İran"],
    note: "F-14, ABD'de emekli olsa da İran envanterinde tarihsel ve sembolik öneme sahip bir platformdur.",
    file: "US Navy 051116-N-4166B-030 An F-14D Tomcat conducts a mission over the Persian Gulf-region.jpg",
  }),
  saeqeh: jet({
    name: "HESA Saeqeh",
    origin: "İran üretimi",
    role: "F-5 temelli İran yerli/modernize hafif savaş uçağı.",
    speed: "Süpersonik",
    range: "Kısa-orta menzil",
    ceiling: "Açık veri sınırlı",
    crew: "1 veya 2",
    tags: ["Hafif av", "Yerli modernizasyon", "İran", "Eski gövde"],
    note: "Saeqeh, İran'ın yaptırım koşullarında eldeki platformlardan yerli kapasite üretme yaklaşımını temsil eder.",
    file: "HESA Saeqeh fighter jet.jpg",
  }),
  su27: jet({
    name: "Sukhoi Su-27",
    origin: "Sovyet/Rus üretimi",
    role: "Uzun menzilli hava üstünlüğü için geliştirilmiş çift motorlu ağır av uçağı.",
    speed: "Mach 2.35",
    range: "1.900+ deniz mili ferry",
    ceiling: "62.000 ft",
    crew: "1",
    tags: ["Hava üstünlüğü", "Ağır av", "Çift motor", "Eski bloklar"],
    note: "Su-27 ailesi, Su-30 ve Su-35 gibi modern türevlerin temelini oluşturur.",
    file: "Sukhoi Su-27SKM at MAKS-2005 airshow.jpg",
  }),
  mig23: jet({
    name: "MiG-23 Flogger",
    origin: "Sovyet üretimi",
    role: "Değişken kanatlı eski nesil av/taarruz uçağı.",
    speed: "Mach 2.3",
    range: "1.500+ deniz mili ferry",
    ceiling: "60.000 ft",
    crew: "1",
    tags: ["Klasik platform", "Değişken kanat", "Geçiş dönemi", "Sınırlı modernlik"],
    note: "MiG-23, modern hava muharebesinde yaşlı kabul edilir ve çoğu kullanıcıda sınırlı görevlerde kalmıştır.",
    file: "Mikoyan-Gurevich MiG-23MLD, Russia - Air Force AN1960073.jpg",
  }),
  f7: jet({
    name: "Chengdu F-7",
    origin: "Çin üretimi",
    role: "MiG-21 temelinden türeyen hafif av uçağı; birçok ülkede eski nesil hava savunma ve eğitim rolünde kullanıldı.",
    speed: "Mach 2 sınıfı",
    range: "Kısa menzil",
    ceiling: "57.000 ft sınıfı",
    crew: "1 veya 2",
    tags: ["Hafif av", "Eski platform", "Çin kökenli", "Geçiş dönemi"],
    note: "F-7 modern hava muharebesinde sınırlı kabul edilir; ancak bazı bölgesel hava güçlerinin eski envanter katmanını anlamak için önemlidir.",
    file: "Chengdu F-7BG Bangladesh Air Force.jpg",
  }),
  t50i: jet({
    name: "T-50i Golden Eagle",
    origin: "Güney Kore üretimi",
    role: "İleri jet eğitim ve hafif taarruz platformu.",
    speed: "Mach 1.5",
    range: "Orta menzil",
    ceiling: "48.000 ft",
    crew: "2",
    tags: ["Eğitim", "Hafif taarruz", "Geçiş platformu", "Endonezya"],
    note: "T-50i, Endonezya'da muharip jet eğitim sürecini ve hafif görevleri destekler.",
    file: "T-50i Golden Eagle Indonesian Air Force.jpg",
  }),
  hawk200: jet({
    name: "BAE Hawk 200",
    origin: "İngiltere üretimi",
    role: "Hafif taarruz ve hava savunma görevleri için tek koltuklu Hawk ailesi türevi.",
    speed: "Transonik",
    range: "Orta menzil",
    ceiling: "48.000 ft sınıfı",
    crew: "1",
    tags: ["Hafif taarruz", "Hava savunması", "Geçiş platformu", "Ada coğrafyası"],
    note: "Hawk 200, Endonezya gibi kullanıcılarda ana muharip jetleri tamamlayan hafif taarruz ve devriye katmanı sağlar.",
    file: "BAE Systems Hawk 200 Royal Malaysian Air Force.jpg",
  }),
};

const imageBackups = {};

const munitionProfiles = {
  f35a: munitions("F-35A'nın mühimmat profili stealth görevlerde dahili yüklemeye, yüksek yoğunluklu görevlerde ise harici istasyonlara dayanır.", [
    mcat("Hava-hava füzeleri", ["AIM-120 AMRAAM", "AIM-9X Sidewinder", "Meteor entegrasyonu (seçili kullanıcı/plan)"]),
    mcat("Hassas bombalar", ["GBU-31/32 JDAM", "GBU-38/54 JDAM/LJDAM", "GBU-39 SDB I", "GBU-53/B StormBreaker", "Paveway IV (seçili kullanıcılar)"]),
    mcat("Stand-off ve özel yükler", ["AGM-154 JSOW", "Kongsberg JSM", "SPEAR 3 (gelecek/ülke bağımlı)", "B61-12 (F-35A sertifikalı görev)"]),
  ]),
  f35b: munitions("F-35B, STOVL yapısı nedeniyle yük/menzil dengesinde farklılaşır; İngiliz ve deniz piyadesi paketlerinde hassas taarruz öne çıkar.", [
    mcat("Hava-hava füzeleri", ["AIM-120 AMRAAM", "AIM-9X Sidewinder", "ASRAAM (Birleşik Krallık)", "Meteor entegrasyonu (gelecek/ülke bağımlı)"]),
    mcat("Hassas bombalar", ["GBU-32 JDAM", "GBU-38/54 JDAM/LJDAM", "GBU-12 Paveway II", "Paveway IV", "GBU-39 SDB I"]),
    mcat("Stand-off yükler", ["SPEAR 3 (Birleşik Krallık programı)", "Kongsberg JSM (entegrasyon/ülke bağımlı)", "AGM-154 JSOW (konfigürasyon bağımlı)"]),
  ]),
  f35c: munitions("F-35C, uçak gemisi görevleri için daha büyük kanat ve deniz odaklı yüklerle F-35 ailesinin en uzun menzilli varyantıdır.", [
    mcat("Hava-hava füzeleri", ["AIM-120 AMRAAM", "AIM-9X Sidewinder", "Meteor entegrasyonu (gelecek/ülke bağımlı)"]),
    mcat("Hassas bombalar", ["GBU-31/32 JDAM", "GBU-38/54 JDAM/LJDAM", "GBU-39 SDB I", "GBU-53/B StormBreaker"]),
    mcat("Deniz/SEAD/stand-off", ["AGM-154 JSOW", "AGM-88G AARGM-ER", "Kongsberg JSM", "SPEAR 3 (entegrasyon/ülke bağımlı)"]),
  ]),
  f22: munitions("F-22 mühimmat profili esas olarak hava üstünlüğüne odaklanır; sınırlı hassas taarruz kapasitesi ikincil katmandır.", [
    mcat("Hava-hava füzeleri", ["AIM-120C/D AMRAAM", "AIM-9M/X Sidewinder"]),
    mcat("Hassas taarruz", ["GBU-32 JDAM", "GBU-39 SDB I", "1.000 lb sınıfı GPS güdümlü bombalar"]),
    mcat("Sabit silah", ["M61A2 20 mm top"]),
  ]),
  f15ex: munitions("F-15EX, yüksek sayıda harici istasyonu sayesinde ağır hava-hava, stand-off ve hassas taarruz yükleri için geniş bir platformdur.", [
    mcat("Hava-hava füzeleri", ["AIM-9X Sidewinder", "AIM-120C/D AMRAAM", "AIM-7 Sparrow (eski uyumluluk)", "AIM-260 JATM (gelecek entegrasyon)"]),
    mcat("Hassas bombalar", ["GBU-31/32/38 JDAM", "GBU-54 LJDAM", "GBU-39 SDB I", "GBU-53/B StormBreaker", "Paveway II/III ailesi"]),
    mcat("Stand-off/deniz/SEAD", ["AGM-158 JASSM/JASSM-ER", "AGM-154 JSOW", "AGM-88 HARM/AARGM (entegrasyon bağımlı)", "AGM-84 Harpoon", "AGM-158C LRASM (entegrasyon/plan)"]),
  ]),
  f15sa: munitions("F-15SA/S, Suudi konfigürasyonunda ağır av ve taarruz görevlerini geniş güdümlü mühimmat yelpazesiyle birleştirir.", [
    mcat("Hava-hava füzeleri", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow"]),
    mcat("Hassas bombalar", ["GBU-10/12/24 Paveway", "GBU-31/38 JDAM", "GBU-54 LJDAM", "CBU ailesi (kullanıcı/stok bağımlı)"]),
    mcat("Taarruz füzeleri", ["AGM-65 Maverick", "AGM-84 Harpoon", "AGM-154 JSOW", "AGM-88 HARM (konfigürasyon bağımlı)"]),
  ]),
  f15e: munitions("F-15E, derin taarruz için tasarlanmış geniş mühimmat taşıma kapasitesiyle ABD ve müttefik filolarında en esnek platformlardan biridir.", [
    mcat("Hava-hava füzeleri", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow"]),
    mcat("Hassas bombalar", ["GBU-10/12/24 Paveway", "GBU-28 bunker delici", "GBU-31/32/38 JDAM", "GBU-39 SDB I", "GBU-54 LJDAM"]),
    mcat("Stand-off/özel taarruz", ["AGM-158 JASSM/JASSM-ER", "AGM-154 JSOW", "AGM-130", "AGM-65 Maverick", "B61 taktik nükleer görev (seçili konfigürasyonlar)"]),
  ]),
  f15c: munitions("F-15C/D ağırlıklı olarak hava üstünlüğü için kullanılır; modern görev seti taarruzdan çok önleme ve devriyeye odaklanır.", [
    mcat("Hava-hava füzeleri", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow"]),
    mcat("Sabit silah", ["M61A1 20 mm top"]),
    mcat("Görev yükleri", ["Harici yakıt tankları", "Hedefleme/kimlik podları (kullanıcı modernizasyonuna bağlı)"]),
  ]),
  f16: munitions("F-16, dünyadaki en geniş mühimmat ekosistemlerinden birine sahiptir; blok ve kullanıcı ülkeye göre liste belirgin biçimde değişir.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder ailesi", "AIM-120 AMRAAM", "AIM-7 Sparrow (eski bloklar)", "IRIS-T / Python / Derby (ülke bağımlı)"]),
    mcat("Hassas bombalar", ["GBU-10/12/24 Paveway", "GBU-31/38 JDAM", "GBU-54 LJDAM", "GBU-39 SDB I", "SPICE / HGK / KGK gibi yerel kitler (ülke bağımlı)"]),
    mcat("Taarruz/deniz/SEAD", ["AGM-65 Maverick", "AGM-88 HARM", "AGM-154 JSOW", "AGM-158 JASSM (seçili kullanıcılar)", "AGM-84 Harpoon (seçili kullanıcılar)", "Hydra/APKWS roket ailesi"]),
  ]),
  f16ef: munitions("F-16E/F Block 60, gelişmiş sensörleriyle Körfez odaklı çok rollü görevlerde yüksek hassas taarruz kapasitesi taşır.", [
    mcat("Hava-hava füzeleri", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM", "MICA / yerel entegrasyon olasılıkları (kullanıcı bağımlı)"]),
    mcat("Hassas bombalar", ["GBU-10/12/24 Paveway", "GBU-31/38 JDAM", "GBU-54 LJDAM", "Paveway IV / yerel kitler (kullanıcı bağımlı)"]),
    mcat("Stand-off/deniz", ["AGM-65 Maverick", "AGM-88 HARM", "AGM-84 Harpoon", "AGM-154 JSOW", "Black Shaheen/SCALP türevi entegrasyon iddiaları (kaynak bağımlı)"]),
  ]),
  a10c: munitions("A-10C mühimmat profili yakın hava desteği, zırhlı hedefler ve düşük irtifa dayanıklılığı etrafında kurulur.", [
    mcat("Top ve roketler", ["GAU-8/A Avenger 30 mm top", "Hydra 70 roketleri", "APKWS güdümlü roketler", "LAU roket podları"]),
    mcat("Kara hedefleri", ["AGM-65 Maverick", "GBU-12 Paveway II", "GBU-54 LJDAM", "GBU-38 JDAM", "CBU-87/97/105 ailesi (stok/politika bağımlı)"]),
    mcat("Savunma/yardımcı", ["AIM-9 Sidewinder", "Hedefleme podları", "İşaretleme ve eğitim yükleri"]),
  ]),
  fa18: munitions("Super Hornet, uçak gemisi hava kanatlarında hava-hava, deniz taarruzu, hassas bombardıman ve SEAD görevlerini birlikte taşır.", [
    mcat("Hava-hava füzeleri", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow (eski uyumluluk)"]),
    mcat("Hassas bombalar", ["GBU-10/12/16 Paveway", "GBU-31/32/38 JDAM", "GBU-54 LJDAM", "GBU-39 SDB I", "CBU ailesi (stok/politika bağımlı)"]),
    mcat("Deniz/SEAD/stand-off", ["AGM-84 Harpoon", "AGM-84H/K SLAM-ER", "AGM-88 HARM", "AGM-88E AARGM", "AGM-154 JSOW", "AGM-65 Maverick"]),
  ]),
  f18hornet: munitions("Legacy Hornet, modernizasyon durumuna göre hava savunması, deniz taarruzu ve hassas bombardıman görevlerinde geniş ama daha eski bir paket taşır.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow"]),
    mcat("Hassas/klasik bombalar", ["GBU-10/12/16 Paveway", "GBU-31/38 JDAM", "Mk-80 serisi bombalar", "CBU ailesi"]),
    mcat("Deniz ve kara hedefleri", ["AGM-65 Maverick", "AGM-84 Harpoon", "AGM-88 HARM (seçili kullanıcılar)", "CRV7/Hydra roketleri"]),
  ]),
  ea18g: munitions("EA-18G'nin ana görev yükü elektronik taarruzdur; kinetik mühimmat daha çok öz savunma ve radar bastırma katmanıdır.", [
    mcat("Hava-hava füzeleri", ["AIM-120 AMRAAM", "AIM-9X Sidewinder"]),
    mcat("Radar bastırma", ["AGM-88 HARM", "AGM-88E AARGM", "AGM-88G AARGM-ER (gelecek/entegrasyon)"]),
    mcat("Elektronik görev yükleri", ["AN/ALQ-99 podları", "Next Generation Jammer podları", "Yakıt tankları ve görev podları"]),
  ]),
  cf18: munitions("CF-18, Kanada'nın kuzey hava savunması ve NATO görevlerinde hava-hava ile hassas taarruz mühimmatlarını birlikte kullanır.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder", "AIM-120 AMRAAM", "AIM-7 Sparrow"]),
    mcat("Hassas bombalar", ["GBU-10/12 Paveway", "GBU-31/38 JDAM", "Mk-80 serisi bombalar"]),
    mcat("Kara/deniz hedefleri", ["AGM-65 Maverick", "AGM-84 Harpoon", "CRV7 roketleri"]),
  ]),
  typhoon: munitions("Typhoon, hava üstünlüğünde çok güçlüdür; Tranche ve ülke paketlerine göre derin taarruz mühimmatları da taşır.", [
    mcat("Hava-hava füzeleri", ["Meteor", "AIM-120 AMRAAM", "AIM-9 Sidewinder", "ASRAAM", "IRIS-T"]),
    mcat("Hassas bombalar", ["Paveway II/III/IV", "GBU-16/24", "Enhanced Paveway", "Lazer/GPS güdümlü ulusal kitler"]),
    mcat("Stand-off/taarruz", ["Storm Shadow", "Taurus KEPD 350 (Almanya/entegrasyon)", "Brimstone", "Marte ER (deniz/ülke bağımlı)"]),
  ]),
  rafale: munitions("Rafale, Fransız hava ve deniz görevlerinin tamamını kapsayan çok rollü bir mühimmat ailesiyle öne çıkar.", [
    mcat("Hava-hava füzeleri", ["MICA EM/IR", "Meteor", "Magic II (eski uyumluluk)"]),
    mcat("Hassas bombalar", ["AASM Hammer ailesi", "GBU-12/22/24 Paveway", "GBU-49 Enhanced Paveway", "Mk-80 serisi bombalar"]),
    mcat("Stand-off/deniz/özel", ["SCALP-EG", "AM39 Exocet", "ASMP-A (Fransız nükleer caydırıcılık görevi)", "TALIOS/laser hedefleme yükleri"]),
  ]),
  gripen: munitions("Gripen, küçük bakım iziyle geniş NATO/İsveç mühimmat entegrasyonunu birleştiren hafif-orta sınıf bir platformdur.", [
    mcat("Hava-hava füzeleri", ["Meteor", "AIM-120 AMRAAM", "IRIS-T", "AIM-9 Sidewinder", "Derby/Python (seçili kullanıcılar)"]),
    mcat("Hassas bombalar", ["GBU-12 Paveway", "GBU-39 SDB I", "Mk-82/83/84", "DWS-39/BK90 (eski/ülke bağımlı)"]),
    mcat("Deniz/stand-off/kara", ["RBS-15F", "AGM-65 Maverick", "Taurus KEPD 350 (entegrasyon/plan)", "Brimstone/SPEAR konseptleri (gelecek)"]),
  ]),
  tornado: munitions("Tornado, düşük irtifa taarruz ve SEAD mirasıyla geniş fakat ülkeye göre yaşlanan bir mühimmat profiline sahiptir.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder", "ASRAAM (Birleşik Krallık)", "IRIS-T (seçili kullanıcılar)"]),
    mcat("Taarruz bombaları", ["Paveway II/III/IV", "GBU-24", "Mk-80 serisi bombalar", "JP233 / MW-1 (tarihsel)"]),
    mcat("Stand-off/SEAD/deniz", ["Storm Shadow", "Taurus KEPD 350", "Brimstone", "ALARM", "AGM-88 HARM", "Kormoran anti-gemi füzesi"]),
  ]),
  f4: munitions("F-4E Phantom II, kullanıcı modernizasyonuna göre klasik hava-hava füzelerinden modern güdümlü bombalara uzanan eski ama geniş bir pakete sahiptir.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder", "AIM-7 Sparrow", "AIM-120 AMRAAM (seçili modernizasyonlar)", "Python/Derby benzeri yerel entegrasyonlar (ülke bağımlı)"]),
    mcat("Hassas bombalar", ["GBU-10/12/24 Paveway", "JDAM/HGK tipi GPS kitleri (ülke bağımlı)", "Mk-80 serisi bombalar"]),
    mcat("Taarruz füzeleri", ["AGM-65 Maverick", "AGM-142 Popeye", "AGM-88 HARM (seçili kullanıcılar)", "Roket podları"]),
  ]),
  mig29: munitions("MiG-29'un temel profili hava-hava odaklıdır; SMT ve modernize paketlerde güdümlü hava-yer yükleri genişler.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-27R/T/ER/ET", "R-77 (modernize varyantlar)", "R-60 (eski uyumluluk)"]),
    mcat("Kara hedefleri", ["FAB/OFAB serisi bombalar", "KAB-500 (modernize varyantlar)", "S-8/S-13 roketleri", "GSh-30-1 30 mm top"]),
    mcat("Taarruz füzeleri", ["Kh-29", "Kh-31A/P (SMT/modernize paket)", "Kh-25 ailesi"]),
  ]),
  mig29k: munitions("MiG-29K, deniz konuşlu görevler için MiG-29 ailesine daha geniş anti-gemi ve hassas taarruz kapasitesi ekler.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-77", "R-27 ailesi"]),
    mcat("Deniz/taarruz füzeleri", ["Kh-31A/P", "Kh-35", "Kh-29T/L", "Kh-25 ailesi"]),
    mcat("Bombalar ve roketler", ["KAB-500KR/L", "FAB/OFAB serisi bombalar", "S-8/S-13 roketleri", "GSh-30-1 30 mm top"]),
  ]),
  mig35: munitions("MiG-35, MiG-29 ailesinin daha modern çok rollü türevi olarak hava-hava ve hassas taarruz mühimmatlarını birlikte hedefler.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-77/RVV-AE", "R-27 ailesi", "K-74M2 entegrasyon olasılığı"]),
    mcat("Taarruz füzeleri", ["Kh-31A/P", "Kh-35", "Kh-38", "Kh-29T/L"]),
    mcat("Bombalar", ["KAB-500/1500", "FAB/OFAB serisi bombalar", "S-8/S-13 roketleri"]),
  ]),
  mig31: munitions("MiG-31, uzun menzilli önleme için özelleşmiştir; mühimmat profili büyük hava-hava füzelerine ve MiG-31K türevinde hipersonik görev yüküne odaklanır.", [
    mcat("Uzun menzilli hava-hava", ["R-33", "R-37/R-37M", "R-40 (tarihsel)"]),
    mcat("Kısa/orta menzil", ["R-73 (modernize türevler)", "R-77 (bazı modernizasyon iddiaları)", "R-60 (eski uyumluluk)"]),
    mcat("Özel görev yükleri", ["Kh-47M2 Kinzhal (MiG-31K türevi)", "GSh-6-23 23 mm top"]),
  ]),
  su57: munitions("Su-57'nin açık kaynak mühimmat bilgisi sınırlıdır; profil, dahili istasyonlu modern Rus hava-hava ve stand-off yüklerine odaklanır.", [
    mcat("Hava-hava füzeleri", ["R-74M2", "R-77M/K-77M", "R-37M", "K-77ME entegrasyon iddiaları"]),
    mcat("Stand-off/taarruz", ["Kh-59MK2", "Kh-38M", "Kh-31A/P", "Grom-E1/E2"]),
    mcat("Hassas bombalar", ["KAB-250", "KAB-500", "UPAB/K08BE ailesi (entegrasyon bağımlı)"]),
  ]),
  su35: munitions("Su-35S, ağır hava üstünlüğü rolünü geniş Rus hava-yer ve anti-gemi yükleriyle tamamlayabilen çok rollü bir platformdur.", [
    mcat("Hava-hava füzeleri", ["R-73/R-74", "R-77-1", "R-27 ailesi", "R-37M"]),
    mcat("Taarruz füzeleri", ["Kh-31A/P", "Kh-35", "Kh-59MK", "Kh-29T/L", "Kh-38M"]),
    mcat("Bombalar ve roketler", ["KAB-500/1500", "FAB/OFAB serisi bombalar", "S-8/S-13/S-25 roketleri", "GSh-30-1 30 mm top"]),
  ]),
  su30sm: munitions("Su-30SM, iki kişilik görev yönetimiyle Rus ağır çok rollü mühimmat paketinin büyük bölümünü taşıyabilir.", [
    mcat("Hava-hava füzeleri", ["R-73/R-74", "R-77/RVV-SD", "R-27 ailesi"]),
    mcat("Taarruz/deniz füzeleri", ["Kh-31A/P", "Kh-35", "Kh-59M/MK", "Kh-29T/L", "Kh-25 ailesi"]),
    mcat("Bombalar ve roketler", ["KAB-500/1500", "FAB/OFAB serisi bombalar", "S-8/S-13/S-25 roketleri", "GSh-30-1 30 mm top"]),
  ]),
  su30mki: munitions("Su-30MKI, Hindistan'a özgü entegrasyonlarla Rus, Hint ve seçili Batı/İsrail kökenli mühimmatları bir araya getiren özel bir profildir.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-77", "R-27 ailesi", "Astra Mk1/Mk2", "Derby/Python entegrasyon olasılıkları (paket bağımlı)"]),
    mcat("Stand-off/deniz", ["BrahMos-A", "Kh-31A/P", "Kh-59", "Kh-29T/L", "Rudram anti-radyasyon ailesi (entegrasyon/plan)"]),
    mcat("Hassas bombalar", ["KAB-500/1500", "SPICE ailesi (entegrasyon/ülke bağımlı)", "Sudarshan/LGB kitleri", "FAB/OFAB ve roket podları"]),
  ]),
  su34: munitions("Su-34, Rus taktik bombardıman katmanının en geniş hava-yer mühimmat profillerinden birine sahiptir.", [
    mcat("Hava-hava/öz savunma", ["R-73/R-74", "R-77/RVV-SD"]),
    mcat("Stand-off/SEAD/deniz", ["Kh-31A/P", "Kh-35", "Kh-59M/MK", "Kh-58UShK", "Kh-38M", "Kh-29T/L"]),
    mcat("Bombalar ve roketler", ["KAB-500/1500", "UPAB/KAB güdümlü bomba ailesi", "FAB/OFAB serisi bombalar", "S-8/S-13/S-25 roketleri"]),
  ]),
  su33: munitions("Su-33, deniz konuşlu ağır av rolünde hava-hava odaklıdır; hava-yer kapasitesi modernizasyon durumuna göre sınırlı veya orta seviyededir.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-27 ailesi", "R-77 (modernizasyon bağımlı)"]),
    mcat("Deniz/kara hedefleri", ["Kh-31A/P (modernizasyon bağımlı)", "FAB/OFAB bombalar", "S-8/S-13 roketleri"]),
    mcat("Sabit silah", ["GSh-30-1 30 mm top"]),
  ]),
  su24: munitions("Su-24M, düşük irtifa taarruz, SEAD ve taktik bombardıman görevleri için geniş Sovyet/Rus mühimmat ailesi taşır.", [
    mcat("Öz savunma", ["R-60", "R-73 (modernizasyon bağımlı)"]),
    mcat("Taarruz/SEAD", ["Kh-25 ailesi", "Kh-29T/L", "Kh-31P", "Kh-58 anti-radyasyon", "Kh-59"]),
    mcat("Bombalar ve roketler", ["KAB-500/1500", "FAB/OFAB serisi bombalar", "BetAB beton delici bombalar", "S-8/S-13/S-24 roketleri"]),
  ]),
  su25: munitions("Su-25, yakın hava desteği için roket, top, zırhlı hedef füzeleri ve klasik bombalara dayanan dayanıklı bir taarruz profili taşır.", [
    mcat("Top ve roketler", ["GSh-30-2 30 mm top", "S-5/S-8/S-13 roketleri", "S-24/S-25 ağır roketler"]),
    mcat("Kara hedefleri", ["Kh-25ML", "Kh-29L/T", "Vikhr (Su-25T/özel türev)", "KAB-500 (modernizasyon bağımlı)"]),
    mcat("Bombalar/öz savunma", ["FAB/OFAB serisi bombalar", "BetAB beton delici bombalar", "R-60", "R-73 (modernizasyon bağımlı)"]),
  ]),
  j20: munitions("J-20 için açık kaynak mühimmat bilgisi sınırlıdır; profil daha çok uzun menzilli hava-hava görevlerine dayanır.", [
    mcat("Hava-hava füzeleri", ["PL-10", "PL-15", "PL-21/PL-17 sınıfı uzun menzil iddiaları", "PL-12 (geçiş/uyumluluk iddiaları)"]),
    mcat("Hassas/özel yükler", ["Dahili istasyon uyumlu hassas mühimmat iddiaları", "LS/GB serisi küçük güdümlü bombalar (açık kaynakta sınırlı)"]),
    mcat("Görev yükleri", ["Elektro-optik hedefleme/keşif yükleri", "Harici tank/yük seçenekleri (test/konfigürasyon bağımlı)"]),
  ]),
  j16: munitions("J-16, Çin'in ağır çok rollü platformu olarak hava-hava, anti-gemi, SEAD ve hassas taarruz yüklerinde geniş bir profil taşır.", [
    mcat("Hava-hava füzeleri", ["PL-10", "PL-12", "PL-15", "PL-17/uzun menzil iddiaları"]),
    mcat("Taarruz/deniz/SEAD", ["KD-88", "YJ-83K", "YJ-91 anti-radyasyon", "CM-400AKG (ihraç/konfigürasyon bağımlı)", "AKF-98/KD-20 sınıfı stand-off iddiaları"]),
    mcat("Bombalar ve roketler", ["LS-6 güdümlü bomba", "LT lazer güdümlü bomba ailesi", "GB serisi güdümlü bombalar", "Roket podları ve top"]),
  ]),
  j10c: munitions("J-10C, modern AESA radar ve Çin hava-hava füzeleriyle orta sınıf çok rollü mühimmat profilini temsil eder.", [
    mcat("Hava-hava füzeleri", ["PL-10", "PL-12", "PL-15", "PL-8 (eski uyumluluk)"]),
    mcat("Hava-yer/SEAD", ["KD-88", "YJ-91 anti-radyasyon", "LS-6 güdümlü bomba", "LT lazer güdümlü bomba ailesi"]),
    mcat("Deniz ve genel taarruz", ["YJ-83K / C-802 sınıfı anti-gemi (konfigürasyon bağımlı)", "GB serisi güdümlü bombalar", "Roket podları ve top"]),
  ]),
  j11: munitions("J-11, Su-27 kökenli ağır hava üstünlüğü rolünü Çin hava-hava füzeleri ve sınırlı hava-yer yükleriyle sürdürür.", [
    mcat("Hava-hava füzeleri", ["PL-8", "PL-10", "PL-12", "PL-15 (modernize türevler)", "R-27/R-73 (erken/ithal stoklar)"]),
    mcat("Hava-yer", ["LS/LT güdümlü bomba ailesi (modernize varyantlar)", "Serbest düşüş bombaları", "Roket podları"]),
    mcat("Sabit silah", ["30 mm top"]),
  ]),
  j15: munitions("J-15, uçak gemisi görevleri için hava-hava, deniz taarruzu ve hassas bombardıman yüklerini bir araya getirir.", [
    mcat("Hava-hava füzeleri", ["PL-8", "PL-10", "PL-12", "PL-15 (modernizasyon bağımlı)"]),
    mcat("Deniz/SEAD", ["YJ-83K", "KD-88", "YJ-91 anti-radyasyon", "CM-400AKG sınıfı iddialar"]),
    mcat("Bombalar", ["LS-6", "LT lazer güdümlü bombalar", "GB serisi güdümlü bombalar", "Serbest düşüş bombaları"]),
  ]),
  jh7a: munitions("JH-7A, özellikle deniz hedefleri ve kara taarruzu için Çin mühimmat ailesinin eski ama geniş bir bölümünü taşır.", [
    mcat("Hava-hava/öz savunma", ["PL-5", "PL-8", "PL-10 (modernizasyon iddiaları)"]),
    mcat("Deniz/SEAD/taarruz", ["YJ-83K", "KD-88", "YJ-91 anti-radyasyon", "C-802 sınıfı anti-gemi füzeleri"]),
    mcat("Bombalar ve roketler", ["LS/LT güdümlü bomba ailesi", "Serbest düşüş bombaları", "Roket podları", "23 mm top podu/görev yükleri"]),
  ]),
  su30mkk: munitions("Su-30MKK/MK2, ihracat kullanıcılarında Rus hava-hava, anti-gemi ve hassas taarruz mühimmatlarını taşıyan ağır çok rollü bir profildir.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-77/RVV-AE", "R-27 ailesi"]),
    mcat("Taarruz/deniz", ["Kh-31A/P", "Kh-35", "Kh-59M/MK", "Kh-29T/L"]),
    mcat("Bombalar ve roketler", ["KAB-500/1500", "FAB/OFAB serisi bombalar", "S-8/S-13 roketleri", "GSh-30-1 top"]),
  ]),
  tejas: munitions("Tejas, Hindistan'ın yerli ve ithal mühimmat entegrasyonlarını hafif çok rollü bir gövdede birleştiren gelişen bir profildir.", [
    mcat("Hava-hava füzeleri", ["Astra Mk1/Mk2", "Derby", "Python-5", "R-73", "ASRAAM entegrasyon/plan iddiaları"]),
    mcat("Hassas bombalar", ["Lazer güdümlü bombalar", "SPICE ailesi", "HSLD / Mk-80 sınıfı bombalar", "DRDO SAAW"]),
    mcat("Stand-off/özel", ["BrahMos-NG (gelecek/plan)", "Rudram ailesi (gelecek/entegrasyon)", "Roket podları ve top"]),
  ]),
  jaguar: munitions("Jaguar, düşük irtifa taarruz mirasını Hindistan modernizasyonlarıyla hassas mühimmat ve deniz görevlerine uzatır.", [
    mcat("Hava-hava/öz savunma", ["Magic II", "ASRAAM (Hindistan modernizasyonu)", "R-550/Magic uyumluluğu"]),
    mcat("Taarruz bombaları", ["Lazer güdümlü bombalar", "Mk-80/HSLD bombalar", "CBU ailesi", "Roket podları"]),
    mcat("Deniz/stand-off", ["Sea Eagle (tarihsel/deniz rolü)", "Harpoon entegrasyon iddiaları", "Darin modernizasyonuna bağlı yerel güdümlü yükler"]),
  ]),
  mirage2000: munitions("Mirage 2000, hava savunması ve hassas taarruz görevlerinde Fransız ve kullanıcı ülke entegrasyonlarına göre değişen geniş bir profile sahiptir.", [
    mcat("Hava-hava füzeleri", ["MICA EM/IR", "Magic II", "Super 530D"]),
    mcat("Hassas bombalar", ["GBU-12/16/24 Paveway", "AASM/yerel kitler (kullanıcı bağımlı)", "SPICE / Crystal Maze entegrasyonları (Hindistan)", "Mk-80 serisi bombalar"]),
    mcat("Stand-off/deniz", ["SCALP-EG (Mirage 2000D/ülke bağımlı)", "AM39 Exocet (seçili kullanıcılar)", "Roket podları ve top"]),
  ]),
  mirage20009: munitions("Mirage 2000-9, BAE konfigürasyonunda gelişmiş stand-off ve hassas taarruz yükleriyle Mirage ailesinin en modern paketlerinden biridir.", [
    mcat("Hava-hava füzeleri", ["MICA EM/IR", "Magic II"]),
    mcat("Hassas bombalar", ["GBU-12/24 Paveway", "PGM-500/PGM-2000 Hakim", "Mk-80 serisi bombalar", "Lazer/GPS güdümlü kitler"]),
    mcat("Stand-off/deniz", ["Black Shaheen / SCALP türevi", "AM39 Exocet (konfigürasyon bağımlı)", "Roket podları ve top"]),
  ]),
  fa50: munitions("FA-50, hafif taarruz ve eğitimden muharip görevlere geçiş için giderek genişleyen bir Batı mühimmat profili kullanır.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder", "AIM-120 AMRAAM (Block 20/gelecek entegrasyon)", "Python/Derby entegrasyon olasılıkları (kullanıcı bağımlı)"]),
    mcat("Hava-yer", ["AGM-65 Maverick", "GBU-12 Paveway", "JDAM entegrasyonu (blok bağımlı)", "Mk-82/83 bombaları"]),
    mcat("Roket/top", ["Hydra 70 roketleri", "LAU roket podları", "20 mm top"]),
  ]),
  l159: munitions("L-159, hafif taarruz görevleri için düşük maliyetli Batı mühimmatlarını ve eğitim yüklerini kullanır.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder", "IRIS-T/ASRAAM entegrasyon seçenekleri (konfigürasyon bağımlı)"]),
    mcat("Hava-yer", ["AGM-65 Maverick", "GBU-12 Paveway", "Mk-82 bombaları", "CBU ailesi"]),
    mcat("Roket/top", ["CRV7/Hydra roketleri", "20 mm top podu", "Keşif/hedefleme podları"]),
  ]),
  f5: munitions("F-5 modernizasyonları, eski hafif av gövdesine ülkeye göre modern kısa menzil füze ve sınırlı hassas taarruz kapasitesi ekler.", [
    mcat("Hava-hava füzeleri", ["AIM-9 Sidewinder", "Python-3/4/5", "Derby (F-5EM gibi modernizasyonlar)", "MAA-1 Piranha (Brezilya)"]),
    mcat("Hava-yer", ["Mk-80 serisi bombalar", "Lazer güdümlü bombalar (modernizasyon bağımlı)", "Roket podları", "CBU ailesi"]),
    mcat("Sabit silah", ["M39 20 mm top"]),
  ]),
  amx: munitions("AMX/A-1, hafif taarruz ve yakın destek görevlerinde Brezilya/İtalya modernizasyonlarına göre değişen mühimmatlar taşır.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder", "MAA-1 Piranha", "IRIS-T entegrasyon seçenekleri (ülke bağımlı)"]),
    mcat("Hassas/klasik bombalar", ["Mk-80 serisi bombalar", "Lazer güdümlü bombalar", "JDAM/yerel kit entegrasyonları", "CBU ailesi"]),
    mcat("Taarruz/SEAD", ["MAR-1 anti-radyasyon füzesi", "Roket podları", "30 mm DEFA top"]),
  ]),
  harrier: munitions("AV-8B Harrier II, deniz konuşlu kısa kalkış görevlerinde hassas bomba, Maverick, roket ve öz savunma füzelerini birleştirir.", [
    mcat("Hava-hava/öz savunma", ["AIM-9M/X Sidewinder", "AIM-120 AMRAAM (AV-8B II+ konfigürasyonu)"]),
    mcat("Hava-yer", ["AGM-65 Maverick", "GBU-12/16 Paveway", "GBU-32/38 JDAM", "GBU-54 LJDAM"]),
    mcat("Roket/top", ["Hydra 70 roketleri", "APKWS", "25 mm GAU-12 top podu", "Mk-80 serisi bombalar"]),
  ]),
  kaan: munitions("KAAN aktif envanter mühimmat profili değil, hedeflenen milli entegrasyon vizyonu olarak gösterilmelidir.", [
    mcat("Planlanan hava-hava", ["Gökdoğan", "Bozdoğan", "Meteor benzeri uzun menzil seçenekleri (olası/gelecek)", "Milli kısa-orta menzil füze ailesi"]),
    mcat("Planlanan hava-yer", ["SOM-J", "HGK/KGK/LGK güdüm kitleri", "Teber", "Kuzgun ailesi"]),
    mcat("Planlanan özel yükler", ["Akbaba anti-radyasyon füzesi", "Çakır seyir füzesi", "Milli hedefleme/keşif podları"]),
  ], "Geliştirme programı; operasyonel sertifikasyon tamamlanmış envanter gibi okunmamalı."),
  f14: munitions("F-14, tarihsel olarak uzun menzilli önleme için ünlüdür; İran hizmetinde yerel modernizasyon ve stok durumuna bağlı farklılaşır.", [
    mcat("Hava-hava füzeleri", ["AIM-54 Phoenix", "Fakour-90 (İran)", "AIM-7 Sparrow", "AIM-9 Sidewinder", "Sedjil/yerel entegrasyon iddiaları"]),
    mcat("Hava-yer", ["Mk-80 serisi bombalar", "Lazer/JDAM entegrasyonları (F-14D Bombcat tarihsel)", "İran yerel güdümlü yük iddiaları"]),
    mcat("Sabit silah", ["M61A1 20 mm top"]),
  ]),
  saeqeh: munitions("Saeqeh açık kaynak bilgisi sınırlı, F-5 kökenli hafif av/taarruz profiliyle değerlendirilmelidir.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder türevleri", "İran yerel kısa menzil füze iddiaları", "F-5 kökenli kısa menzil uyumluluk"]),
    mcat("Hava-yer", ["Mk-80 serisi bombalar", "Roket podları", "Yasin/Balaban sınıfı yerel güdümlü bomba iddiaları"]),
    mcat("Sabit silah", ["20 mm top"]),
  ], "Açık kaynak mühimmat bilgisi sınırlı; panel temsili/olasılık temelli okunmalı."),
  su27: munitions("Su-27 temel olarak ağır hava üstünlüğü platformudur; modernize paketlerde sınırlı çok rollü mühimmat eklenir.", [
    mcat("Hava-hava füzeleri", ["R-73", "R-27R/T/ER/ET", "R-77 (modernizasyon bağımlı)"]),
    mcat("Hava-yer", ["FAB/OFAB serisi bombalar", "S-8/S-13 roketleri", "KAB-500 (modernizasyon bağımlı)"]),
    mcat("Sabit silah", ["GSh-30-1 30 mm top"]),
  ]),
  mig23: munitions("MiG-23, eski nesil değişken kanatlı bir platform olarak hava-hava ve basit taarruz yüklerini taşır.", [
    mcat("Hava-hava füzeleri", ["R-23/R-24", "R-60", "R-13", "R-73 (çok sınırlı/modernizasyon bağımlı)"]),
    mcat("Hava-yer", ["Kh-23", "Kh-25", "FAB/OFAB serisi bombalar", "S-5/S-8 roketleri"]),
    mcat("Sabit silah", ["GSh-23L 23 mm top"]),
  ]),
  f7: munitions("Chengdu F-7, MiG-21 kökenli hafif av profiliyle kısa menzil hava-hava ve basit taarruz yükleri taşır.", [
    mcat("Hava-hava füzeleri", ["PL-2", "PL-5", "PL-7", "PL-8", "Magic II / AIM-9 uyumluluğu (kullanıcı bağımlı)"]),
    mcat("Hava-yer", ["Serbest düşüş bombaları", "Roket podları", "Yakın destek yükleri"]),
    mcat("Sabit silah", ["30 mm top"]),
  ]),
  t50i: munitions("T-50i, ileri eğitim uçağı temelinde hafif taarruz görevleri için sınırlı ama kullanışlı bir mühimmat profili taşır.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder", "Kısa menzil eğitim/görev füzeleri"]),
    mcat("Hava-yer", ["Mk-82 bombaları", "CBU ailesi", "Lazer güdümlü bomba entegrasyonları (konfigürasyon bağımlı)"]),
    mcat("Roket/top", ["Hydra 70 roketleri", "20 mm top", "Eğitim podları"]),
  ]),
  hawk200: munitions("Hawk 200, hafif av/taarruz rolünde kısa menzil hava-hava, Maverick, deniz füzesi ve klasik bombalarla görev yapabilir.", [
    mcat("Hava-hava/öz savunma", ["AIM-9 Sidewinder", "ASRAAM entegrasyon seçenekleri (konfigürasyon bağımlı)"]),
    mcat("Hava-yer/deniz", ["AGM-65 Maverick", "Sea Eagle anti-gemi füzesi", "Mk-82/83 bombaları", "CBU ailesi"]),
    mcat("Roket/top", ["CRV7/Hydra roketleri", "30 mm ADEN top podu", "Keşif/hedefleme podları"]),
  ]),
};

const munitionKnowledge = [
  mdetail(["aim-120", "amraam"], "AIM-120 AMRAAM", "Orta/uzun menzil hava-hava füzesi", "Aktif radar güdümü", "ABD", "missile", "AMRAAM ailesi modern Batı hava kuvvetlerinde görüş ötesi hava muharebesinin en yaygın füze ailelerinden biridir."),
  mdetail(["aim-9x", "aim-9", "sidewinder"], "AIM-9 Sidewinder", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "ABD", "missile", "Sidewinder ailesi yakın hava muharebesi ve öz savunma görevlerinde kullanılan yaygın bir kısa menzil füze ailesidir."),
  mdetail(["meteor"], "Meteor", "Görüş ötesi hava-hava füzesi", "Aktif radar / ramjet tahrik", "Avrupa", "missile", "Meteor, Avrupa platformlarında uzun menzilli hava-hava angajman kabiliyetini temsil eden modern bir füzedir."),
  mdetail(["asraam"], "ASRAAM", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "Birleşik Krallık", "missile", "ASRAAM, yüksek çeviklik ve hızlı tepki gerektiren yakın hava-hava görevleri için geliştirilmiş bir füzedir."),
  mdetail(["iris-t"], "IRIS-T", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "Almanya/Avrupa", "missile", "IRIS-T, birçok Avrupa savaş uçağında kullanılan gelişmiş yakın hava muharebesi füzesidir."),
  mdetail(["mica"], "MICA", "Kısa/orta menzil hava-hava füzesi", "Radar veya kızılötesi arayıcı", "Fransa", "missile", "MICA ailesi Fransız platformlarında hem radar hem kızılötesi arayıcı seçenekleriyle görev yapar."),
  mdetail(["pl-15"], "PL-15", "Görüş ötesi hava-hava füzesi", "Aktif radar güdümü", "Çin", "missile", "PL-15, Çin'in modern orta/uzun menzil hava-hava füze katmanında öne çıkan sistemlerden biridir."),
  mdetail(["pl-12"], "PL-12", "Orta menzil hava-hava füzesi", "Aktif radar güdümü", "Çin", "missile", "PL-12, Çin savaş uçaklarında önceki nesil görüş ötesi hava-hava kabiliyetini temsil eder."),
  mdetail(["pl-10"], "PL-10", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "Çin", "missile", "PL-10, Çin platformlarında yakın hava muharebesi için kullanılan modern bir kızılötesi füzedir."),
  mdetail(["r-73", "r-74"], "R-73/R-74", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "Rusya", "missile", "R-73 ailesi Sovyet/Rus kökenli platformlarda yüksek çeviklikli yakın hava muharebesi füzesi olarak bilinir."),
  mdetail(["r-77", "rvv-ae", "rvv-sd"], "R-77 / RVV-AE", "Orta menzil hava-hava füzesi", "Aktif radar güdümü", "Rusya", "missile", "R-77 ailesi Rus platformlarının modern görüş ötesi hava-hava füze katmanını temsil eder."),
  mdetail(["r-27"], "R-27", "Orta menzil hava-hava füzesi", "Radar veya kızılötesi varyantlar", "Sovyet/Rusya", "missile", "R-27 ailesi MiG-29 ve Su-27 ailesi gibi platformlarda farklı arayıcı seçenekleriyle yaygınlaşmıştır."),
  mdetail(["r-37", "r-33", "aim-54", "phoenix", "fakour"], "Uzun menzilli önleme füzesi", "Uzun menzil hava-hava füzesi", "Radar güdümü", "Çeşitli", "missile", "Bu sınıf, büyük av/önleme platformlarında yüksek irtifa ve uzun menzilli devriye görevleriyle ilişkilidir."),
  mdetail(["aim-7", "sparrow"], "AIM-7 Sparrow", "Orta menzil hava-hava füzesi", "Yarı aktif radar güdümü", "ABD", "missile", "Sparrow, önceki nesil Batı hava-hava füze ekosisteminin önemli ve yaygın bir üyesidir."),
  mdetail(["derby"], "Derby", "Orta menzil hava-hava füzesi", "Aktif radar güdümü", "İsrail", "missile", "Derby, modernize edilmiş hafif ve orta sınıf platformlarda kullanılan İsrail kökenli bir hava-hava füzesidir."),
  mdetail(["python"], "Python", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "İsrail", "missile", "Python ailesi yakın hava muharebesi için geliştirilmiş İsrail kökenli çevik füze ailesidir."),
  mdetail(["astra"], "Astra", "Orta menzil hava-hava füzesi", "Aktif radar güdümü", "Hindistan", "missile", "Astra, Hindistan'ın yerli görüş ötesi hava-hava füze programını temsil eder."),
  mdetail(["jdAM", "jdam", "gbu-31", "gbu-32", "gbu-38"], "JDAM", "Hassas güdümlü bomba kiti", "GPS/ataletsel güdüm", "ABD", "bomb", "JDAM, klasik bombaları hava şartlarından daha az etkilenen hassas güdümlü mühimmatlara dönüştüren yaygın bir kit ailesidir."),
  mdetail(["gbu-54", "ljdam"], "GBU-54 LJDAM", "Çift modlu hassas bomba", "GPS/INS ve lazer güdümü", "ABD", "bomb", "LJDAM, sabit ve hareketli hedef setlerine karşı esnekliği artırmak için JDAM'a lazer arayıcı ekleyen bir varyanttır."),
  mdetail(["paveway", "gbu-10", "gbu-12", "gbu-16", "gbu-24", "gbu-49"], "Paveway ailesi", "Lazer güdümlü bomba", "Lazer güdümü", "ABD/Birleşik Krallık", "bomb", "Paveway ailesi, NATO ve müttefik hava kuvvetlerinde en yaygın lazer güdümlü bomba ailelerinden biridir."),
  mdetail(["gbu-39", "sdb i"], "GBU-39 SDB I", "Küçük çaplı hassas bomba", "GPS/ataletsel güdüm", "ABD", "bomb", "SDB I, daha küçük boyutuyla bir platformun daha fazla hassas mühimmat taşımasına imkân veren bir bomba ailesidir."),
  mdetail(["gbu-53", "stormbreaker"], "GBU-53/B StormBreaker", "Küçük çaplı çok modlu bomba", "Çok modlu arayıcı", "ABD", "bomb", "StormBreaker, küçük çaplı hassas bomba konseptini çok modlu arayıcıyla geliştiren modern bir mühimmattır."),
  mdetail(["aasm", "hammer"], "AASM Hammer", "Modüler hassas bomba kiti", "GPS/INS, lazer veya görüntüleme seçenekleri", "Fransa", "bomb", "AASM Hammer, Rafale gibi Fransız platformlarında kullanılan modüler hassas mühimmat ailesidir."),
  mdetail(["spice"], "SPICE", "Görüntü destekli hassas bomba", "GPS/INS ve elektro-optik eşleme", "İsrail", "bomb", "SPICE ailesi görüntü eşleme ve güdüm kitleriyle klasik bombaları hassas mühimmatlara dönüştürür."),
  mdetail(["kab"], "KAB güdümlü bomba ailesi", "Hassas güdümlü bomba", "Lazer, TV veya uydu güdüm seçenekleri", "Rusya", "bomb", "KAB ailesi Rus/Sovyet kökenli platformlarda kullanılan güdümlü bomba sınıfını temsil eder."),
  mdetail(["fab", "ofab", "betab"], "FAB/OFAB/BetAB bombaları", "Serbest düşüş veya modernize bomba ailesi", "Güdümsüz veya kit bağımlı", "Sovyet/Rusya", "bomb", "FAB ve OFAB aileleri Sovyet/Rus kökenli klasik bomba stoklarını, BetAB ise beton delici sınıfı temsil eder."),
  mdetail(["mk-80", "mk-82", "mk-83", "mk-84"], "Mk-80 serisi", "Genel maksat bomba ailesi", "Güdümsüz veya kit bağımlı", "ABD", "bomb", "Mk-80 serisi, farklı güdüm kitleriyle hassas mühimmata dönüştürülebilen yaygın genel maksat bomba ailesidir."),
  mdetail(["cbu"], "CBU ailesi", "Küme mühimmat ailesi", "Alt mühimmat taşıyıcı", "Çeşitli", "bomb", "CBU sınıfı açık kaynak envanter listelerinde görülebilir; kullanım durumu ülke politikası ve hukukî kısıtlarla yakından ilişkilidir."),
  mdetail(["b61"], "B61", "Özel görev mühimmatı", "Görev paketi/sertifikasyon bağımlı", "ABD", "bomb", "B61, yalnızca özel sertifikasyon ve politika çerçevesinde ele alınması gereken nükleer caydırıcılık mühimmatıdır."),
  mdetail(["gbu-28"], "GBU-28", "Bunker delici hassas bomba", "Lazer güdümü", "ABD", "bomb", "GBU-28, sertleştirilmiş hedeflere karşı geliştirilmiş ağır hassas bomba sınıfını temsil eder."),
  mdetail(["hgk", "kgk", "lgk", "teber"], "Türk güdüm kitleri", "Hassas güdüm kiti", "GPS/INS veya lazer seçenekleri", "Türkiye", "bomb", "HGK, KGK, LGK ve Teber gibi kitler klasik bombaların hassas vuruş kabiliyetini artıran yerli mühimmat ailesidir."),
  mdetail(["ls-6", "lt lazer", "gb serisi"], "Çin güdümlü bomba ailesi", "Hassas güdümlü bomba", "GPS/INS veya lazer seçenekleri", "Çin", "bomb", "LS, LT ve GB serileri Çin platformlarında görülen hassas hava-yer mühimmat ailelerini temsil eder."),
  mdetail(["jassm", "agm-158 jassm"], "AGM-158 JASSM", "Stand-off seyir füzesi", "INS/GPS ve terminal arayıcı", "ABD", "missile", "JASSM ailesi hava savunma tehdidinden uzakta hassas taarruz için geliştirilen stand-off füze sınıfındadır."),
  mdetail(["lrasm", "agm-158c"], "AGM-158C LRASM", "Anti-gemi stand-off füzesi", "Çoklu sensör / otonom hedefleme", "ABD", "missile", "LRASM, modern deniz hedeflerine karşı geliştirilmiş uzun menzilli stand-off anti-gemi füzesidir."),
  mdetail(["jsow", "agm-154"], "AGM-154 JSOW", "Stand-off süzülme mühimmatı", "GPS/INS ve varyant bağımlı arayıcı", "ABD", "bomb", "JSOW, uçaktan bırakıldıktan sonra süzülerek hedef bölgesine giden stand-off mühimmat ailesidir."),
  mdetail(["harm", "aargm", "agm-88"], "AGM-88 HARM/AARGM", "Anti-radyasyon füzesi", "Radar yayıcılarına yönelim", "ABD", "missile", "HARM/AARGM ailesi hava savunma radarlarını baskılamak için geliştirilen anti-radyasyon füze sınıfını temsil eder."),
  mdetail(["maverick", "agm-65"], "AGM-65 Maverick", "Kısa/orta menzil hava-yer füzesi", "Elektro-optik, kızılötesi veya lazer varyantları", "ABD", "missile", "Maverick, zırhlı araçlar ve nokta kara hedeflerine karşı yaygın kullanılan taktik hava-yer füzesidir."),
  mdetail(["harpoon", "agm-84"], "AGM-84 Harpoon", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "ABD", "missile", "Harpoon, Batı deniz ve hava platformlarında uzun süre yaygın kullanılan anti-gemi füze ailesidir."),
  mdetail(["slam-er"], "AGM-84H/K SLAM-ER", "Stand-off kara/deniz taarruz füzesi", "GPS/INS ve görüntü destekli terminal güdüm", "ABD", "missile", "SLAM-ER, Harpoon ailesinden türeyen daha hassas stand-off taarruz kabiliyetini temsil eder."),
  mdetail(["brimstone"], "Brimstone", "Hassas hava-yer füzesi", "Milimetrik dalga radar/lazer seçenekleri", "Birleşik Krallık", "missile", "Brimstone, küçük ve hareketli kara hedefleri için geliştirilmiş hassas taktik füze ailesidir."),
  mdetail(["storm shadow", "scalp"], "Storm Shadow / SCALP-EG", "Stand-off seyir füzesi", "INS/GPS ve terminal görüntüleme", "Birleşik Krallık/Fransa", "missile", "Storm Shadow/SCALP-EG, derin taarruz görevleriyle ilişkilendirilen Avrupa kökenli stand-off füze ailesidir."),
  mdetail(["taurus"], "Taurus KEPD 350", "Stand-off seyir füzesi", "INS/GPS ve görüntü destekli terminal güdüm", "Almanya/İsveç", "missile", "Taurus, Avrupa platformlarında derin taarruz görevleri için kullanılan uzun menzilli stand-off füzedir."),
  mdetail(["spear"], "SPEAR", "Küçük stand-off mühimmat", "Çok modlu arayıcı/INS-GPS", "Birleşik Krallık", "missile", "SPEAR ailesi F-35 gibi platformlarda yüksek sayıda taşınabilen küçük stand-off mühimmat konseptini temsil eder."),
  mdetail(["jsm", "kongsberg"], "Kongsberg JSM", "Stand-off/anti-gemi füzesi", "INS/GPS ve görüntüleyici arayıcı", "Norveç", "missile", "JSM, özellikle F-35 entegrasyonu için tasarlanmış deniz ve kara hedeflerine karşı kullanılan Norveç kökenli füzedir."),
  mdetail(["exocet"], "AM39 Exocet", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "Fransa", "missile", "Exocet ailesi Fransız kökenli ve birçok ülkede kullanılan tanınmış anti-gemi füze ailesidir."),
  mdetail(["rbs-15"], "RBS-15", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "İsveç", "missile", "RBS-15, İsveç kökenli deniz hedeflerine karşı kullanılan stand-off anti-gemi füzesidir."),
  mdetail(["kh-31"], "Kh-31", "Anti-gemi/anti-radyasyon füzesi", "Varyanta göre radar veya anti-radyasyon arayıcı", "Rusya", "missile", "Kh-31 ailesi Rus platformlarında hem deniz hedefleri hem radar bastırma rolleriyle ilişkilidir."),
  mdetail(["kh-35"], "Kh-35", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "Rusya", "missile", "Kh-35, Rus kökenli orta sınıf anti-gemi füze ailesidir."),
  mdetail(["kh-59"], "Kh-59", "Stand-off hava-yer füzesi", "TV/INS/GPS varyantları", "Rusya", "missile", "Kh-59 ailesi Rus platformlarında stand-off hassas taarruz görevleriyle ilişkilendirilir."),
  mdetail(["kh-29"], "Kh-29", "Taktik hava-yer füzesi", "TV veya lazer arayıcı", "Rusya", "missile", "Kh-29, sert nokta hedeflerine karşı kullanılan ağır taktik hava-yer füze ailesidir."),
  mdetail(["kh-25"], "Kh-25", "Taktik hava-yer füzesi", "Lazer/radar/TV varyantları", "Rusya", "missile", "Kh-25 ailesi daha hafif taktik kara hedeflerine karşı kullanılan Sovyet/Rus hava-yer füzesidir."),
  mdetail(["kh-38"], "Kh-38", "Modern taktik hava-yer füzesi", "Modüler arayıcı seçenekleri", "Rusya", "missile", "Kh-38, farklı arayıcı seçenekleriyle modern Rus taktik taarruz füze ailesini temsil eder."),
  mdetail(["kh-58"], "Kh-58", "Anti-radyasyon füzesi", "Radar yayıcılarına yönelim", "Rusya", "missile", "Kh-58, hava savunma radarlarına karşı kullanılan Rus anti-radyasyon füze ailesidir."),
  mdetail(["kinzhal"], "Kh-47M2 Kinzhal", "Hızlı stand-off füze", "INS/GPS olarak raporlanan güdüm", "Rusya", "missile", "Kinzhal, MiG-31K gibi platformlarla anılan ve açık kaynaklarda stratejik stand-off görevlerle ilişkilendirilen özel bir mühimmattır."),
  mdetail(["brahmos"], "BrahMos-A", "Süpersonik stand-off/anti-gemi füzesi", "INS/GPS ve terminal arayıcı", "Hindistan/Rusya", "missile", "BrahMos-A, Su-30MKI gibi platformlarla anılan ağır ve yüksek hızlı stand-off füze kabiliyetini temsil eder."),
  mdetail(["rudram"], "Rudram", "Anti-radyasyon füzesi", "Radar yayıcılarına yönelim", "Hindistan", "missile", "Rudram ailesi Hindistan'ın yerli radar bastırma ve SEAD kabiliyeti hedefini temsil eder."),
  mdetail(["som-j"], "SOM-J", "Stand-off seyir füzesi", "INS/GPS ve terminal arayıcı seçenekleri", "Türkiye", "missile", "SOM-J, Türk savunma sanayiinin savaş uçağı entegrasyonu hedeflenen stand-off mühimmat ailesidir."),
  mdetail(["gökdoğan", "gokdogan"], "Gökdoğan", "Görüş ötesi hava-hava füzesi", "Aktif radar güdümü", "Türkiye", "missile", "Gökdoğan, Türkiye'nin yerli görüş ötesi hava-hava füze programını temsil eder."),
  mdetail(["bozdoğan", "bozdogan"], "Bozdoğan", "Kısa menzil hava-hava füzesi", "Kızılötesi arayıcı", "Türkiye", "missile", "Bozdoğan, Türkiye'nin yerli kısa menzil hava-hava füze ailesidir."),
  mdetail(["akbaba"], "Akbaba", "Anti-radyasyon füzesi", "Radar yayıcılarına yönelim", "Türkiye", "missile", "Akbaba, Türk hava platformları için planlanan/raporlanan anti-radyasyon füze kabiliyetidir."),
  mdetail(["çakır", "cakir"], "Çakır", "Seyir/stand-off füzesi", "INS/GPS ve terminal arayıcı seçenekleri", "Türkiye", "missile", "Çakır, farklı platformlardan atılabilmesi hedeflenen Türk stand-off füze ailesidir."),
  mdetail(["yj-83", "c-802"], "YJ-83 / C-802", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "Çin", "missile", "YJ-83/C-802 ailesi Çin kökenli deniz hedeflerine karşı kullanılan yaygın anti-gemi füze sınıfıdır."),
  mdetail(["yj-91"], "YJ-91", "Anti-radyasyon/anti-gemi varyantları", "Varyanta göre radar arayıcı", "Çin", "missile", "YJ-91, Çin platformlarında radar bastırma ve deniz hedefleme rolleriyle ilişkilendirilen füze ailesidir."),
  mdetail(["kd-88"], "KD-88", "Stand-off hava-yer füzesi", "Elektro-optik/TV veya radar varyantları", "Çin", "missile", "KD-88, Çin savaş uçaklarında kara ve deniz hedeflerine karşı kullanılan stand-off füze ailesidir."),
  mdetail(["cm-400", "akf-98", "kd-20"], "Çin stand-off füze ailesi", "Stand-off taarruz füzesi", "Varyant bağımlı", "Çin", "missile", "Bu sınıf Çin platformları için açık kaynaklarda geçen farklı stand-off füze ailelerini genel olarak temsil eder."),
  mdetail(["sea eagle"], "Sea Eagle", "Anti-gemi füzesi", "Aktif radar terminal arayıcı", "Birleşik Krallık", "missile", "Sea Eagle, özellikle eski taarruz platformlarında deniz hedeflerine karşı kullanılan İngiliz anti-gemi füzesidir."),
  mdetail(["mar-1"], "MAR-1", "Anti-radyasyon füzesi", "Radar yayıcılarına yönelim", "Brezilya", "missile", "MAR-1, Brezilya kökenli anti-radyasyon füze programını temsil eder."),
  mdetail(["agm-142", "popeye"], "AGM-142 Popeye", "Stand-off hava-yer füzesi", "Elektro-optik terminal güdüm", "İsrail/ABD", "missile", "Popeye/AGM-142 sınıfı, uzun menzilli hassas hava-yer taarruz mühimmatı olarak bilinir."),
  mdetail(["hydra", "apkws", "crv7"], "Hydra / APKWS / CRV7", "Roket ailesi", "Güdümsüz veya lazer kitli varyantlar", "ABD/Kanada", "rocket", "Hydra, CRV7 ve APKWS gibi aileler yakın destek ve hafif taarruz görevlerinde roket veya güdümlü roket katmanını temsil eder."),
  mdetail(["s-5", "s-8", "s-13", "s-24", "s-25"], "S serisi roketler", "Roket ailesi", "Güdümsüz veya modernizasyon bağımlı", "Sovyet/Rusya", "rocket", "S serisi roketler Sovyet/Rus kökenli yakın destek ve taktik taarruz mühimmat ailesidir."),
  mdetail(["gau-8"], "GAU-8/A Avenger", "Uçak topu", "Balistik/sabit silah", "ABD", "gun", "GAU-8/A, A-10 ile özdeşleşmiş ağır 30 mm uçak topudur."),
  mdetail(["m61"], "M61 Vulcan", "Uçak topu", "Balistik/sabit silah", "ABD", "gun", "M61 Vulcan, birçok ABD ve NATO platformunda kullanılan 20 mm döner namlulu uçak topudur."),
  mdetail(["gsh", "aden", "defa", "m39", "20 mm top", "23 mm", "30 mm top"], "Uçak topu", "Sabit silah", "Balistik", "Çeşitli", "gun", "Uçak topları kısa mesafeli hava-hava, uyarı ateşi veya yakın destek rollerinde platformun sabit silah katmanını temsil eder."),
  mdetail(["alq-99", "next generation jammer"], "Elektronik harp podu", "Elektronik taarruz/görev yükü", "Aktif karıştırma", "ABD", "pod", "Elektronik harp podları kinetik mühimmat değildir; görev paketinin radar ve iletişim baskılama katmanını temsil eder."),
  mdetail(["talios", "hedefleme", "keşif", "kimlik pod"], "Hedefleme/keşif podu", "Sensör/görev podu", "Elektro-optik/laser işaretleme", "Çeşitli", "pod", "Hedefleme ve keşif podları mühimmatı yönlendirme, hedef tespiti ve görev farkındalığı için kullanılan sensör yükleridir."),
  mdetail(["yakıt tank", "harici yakıt"], "Harici yakıt tankı", "Görev destek yükü", "Güdüm yok", "Çeşitli", "pod", "Harici yakıt tankları mühimmat değildir; menzil ve devriye süresini artıran destek yükleridir."),
];

const munitionPhotoCatalog = [
  mphoto(["lrasm", "agm-158c"], "A LRASM at NAS Patuxent River 2015 Aug. 12, 2015.jpg"),
  mphoto(["slam-er", "agm-84h", "agm-84k"], "AGM-84H m02006120800057.jpg"),
  mphoto(["aim-120", "amraam"], "AIM-120 AMRAAM.jpg"),
  mphoto(["aim-260"], "AIM-260 JATM missile.jpg"),
  mphoto(["aim-9x", "aim-9", "sidewinder"], "AIM-9 Sidewinder.jpg"),
  mphoto(["meteor"], "Meteor Missile in EuroFighter.JPG"),
  mphoto(["asraam"], "ASRAAM Missiles Fitted to RAF Typhoon Jet MOD 45155903.jpg"),
  mphoto(["iris-t"], "IRIS-T air-to-air-missile.jpg"),
  mphoto(["mica"], "MICA EM missile.jpg"),
  mphoto(["magic ii", "matra magic"], "R550 Magic 2 (cropped).jpg"),
  mphoto(["super 530"], "Magic II and Super 530D.jpg"),
  mphoto(["pl-15"], "PL15E air-to-air missile.jpg"),
  mphoto(["pl-12"], "PL15 and PL-12 missile.jpg"),
  mphoto(["pl-10"], "PL-10 Air-to-air missile 20250921.jpg"),
  mphoto(["pl-8"], "PL-8 missile.jpg"),
  mphoto(["pl-5"], "PL-5EII missile.jpg"),
  mphoto(["pl-2"], "PL-2 air-to-air missile.jpg"),
  mphoto(["pl-7"], "PL-7 air-to-air missile.jpg"),
  mphoto(["r-73", "r-74"], "R-73.jpg"),
  mphoto(["r-77", "rvv-ae", "rvv-sd"], "Vympel-R-77-maks2009.jpg"),
  mphoto(["r-37", "r-37m"], "Vympel R-37M missile.jpg"),
  mphoto(["r-33"], "Vympel R-33 missile.jpg"),
  mphoto(["r-40"], "R-40 missile.jpg"),
  mphoto(["r-60"], "Molniya R-60 missile.jpg"),
  mphoto(["r-23", "r-24"], "Vympel R-23 missile.jpg"),
  mphoto(["r-13"], "K-13 missile.jpg"),
  mphoto(["k-74m2"], "R-73.jpg"),
  mphoto(["k-77me"], "Vympel-R-77-maks2009.jpg"),
  mphoto(["r-27"], "Artem R-27 missile family, Kyiv, 2019.jpg"),
  mphoto(["aim-54", "phoenix", "fakour"], "AIM-54 Phoenix full load.jpg"),
  mphoto(["aim-7", "sparrow"], "AIM-7 Sparrow.JPG"),
  mphoto(["derby"], "Derby and Python Aero India 2015.JPG"),
  mphoto(["python"], "Python5-missile001.jpg"),
  mphoto(["astra"], "Astra missile on display at Aero India 2013.jpg"),
  mphoto(["gbu-54", "ljdam"], "Laser seeker of GBU-54 LJDAM right side view at JASDF Hamamatsu Air Base October 20, 2019.jpg"),
  mphoto(["gbu-53", "stormbreaker"], "GBU-53 StormBreaker on F-15E Strike Eagle.jpg"),
  mphoto(["gbu-39", "sdb i"], "Boeing GBU-39 Small Diameter Bomb.jpg"),
  mphoto(["jdam", "gbu-31", "gbu-32", "gbu-38"], "JDAM Joint Direct Attack Munition (GBU-31) Guidance-INS GPS Mk-84 Warhead (52578877821).jpg"),
  mphoto(["paveway", "gbu-10", "gbu-12", "gbu-16", "gbu-24", "gbu-49"], "GBU-12 Paveway II (11931072113).jpg"),
  mphoto(["aasm", "hammer"], "AASM HAMMER 1000.jpg"),
  mphoto(["spice"], "Spice 1000.jpg"),
  mphoto(["kab"], "KAB-500KR.jpg"),
  mphoto(["fab", "ofab", "betab"], "FAB-500 M54 Bomb.jpg"),
  mphoto(["mk-80", "mk-82", "mk-83", "mk-84"], "Mark82Bomb.JPEG"),
  mphoto(["cbu"], "Cbu-87 cluster bomb.jpg"),
  mphoto(["b61"], "B-61 bomb.jpg"),
  mphoto(["gbu-28"], "F-15E gbu-28 release.jpg"),
  mphoto(["dws-39", "bk90"], "DWS 39 Mjölner.jpg"),
  mphoto(["jp233"], "JP233 anti-runway weapon.jpg"),
  mphoto(["mw-1"], "MW-1 submunition dispenser.jpg"),
  mphoto(["drdo saaw", "saaw"], "DRDO Smart Anti-Airfield Weapon.jpg"),
  mphoto(["upab", "k08be"], "UPAB-1500B-E guided bomb.jpg"),
  mphoto(["sudarshan"], "Sudarshan laser-guided bomb.jpg"),
  mphoto(["hakim", "pgm-500", "pgm-2000"], "Hakim guided bomb.jpg"),
  mphoto(["hgk", "kgk", "lgk", "teber"], "Teber guidance kit.jpg"),
  mphoto(["ls-6", "lt lazer", "gb serisi"], "LS-6 precision-guided glide bomb.jpg"),
  mphoto(["jassm", "agm-158 jassm"], "Lockheed Martin AGM-158 JASSM (8351604870).jpg"),
  mphoto(["agm-130"], "AGM-130 missile.jpg"),
  mphoto(["jsow", "agm-154"], "AGM-154 JSOW 01.jpg"),
  mphoto(["harm", "aargm", "agm-88"], "AGM-88 HARM on F-4G.jpg"),
  mphoto(["maverick", "agm-65"], "AGM-65B Maverick (53903772328).jpg"),
  mphoto(["harpoon", "agm-84"], "AGM-84 Harpoon (SLAM).jpg"),
  mphoto(["brimstone"], "Missile MBDA Brimstone.jpg"),
  mphoto(["storm shadow", "scalp"], "BLW MBDA Storm Shadow missile.jpg"),
  mphoto(["taurus"], "Taurus KEPD 350 WTD91 2005.jpg"),
  mphoto(["spear"], "SPEAR 3 missile at DSEI 2019.jpg"),
  mphoto(["jsm", "kongsberg"], "Joint Strike Missile.jpg"),
  mphoto(["exocet"], "AM39 Exocet missile.jpg"),
  mphoto(["rbs-15"], "RBS15 missile.jpg"),
  mphoto(["marte er"], "Marte ER missile.jpg"),
  mphoto(["asmp-a", "asmpa"], "ASMPA missile.jpg"),
  mphoto(["alarm"], "ALARM missile.jpg"),
  mphoto(["kormoran"], "AS.34 Kormoran missile.jpg"),
  mphoto(["kh-31"], "Kh-31 Armia-2018 1.jpg"),
  mphoto(["kh-35"], "Kh-35UE - MAKS2015part7-46.jpg"),
  mphoto(["kh-59"], "Kh-59MK2 maks2009.jpg"),
  mphoto(["kh-29"], "Air-to-surface guided missile Kh-29.jpg"),
  mphoto(["kh-25"], "Kh-25 missile in Monino.jpg"),
  mphoto(["kh-23"], "Kh-23 missile.jpg"),
  mphoto(["kh-38"], "Kh-38 in maks2009.jpg"),
  mphoto(["kh-58"], "Kh-58UShKE IRR anti-radiation missile at MAKS-2015 03.jpg"),
  mphoto(["kinzhal"], "Kh-47M2 Kinzhal missile 2018.jpg"),
  mphoto(["grom-e"], "Grom-E1 missile.jpg"),
  mphoto(["vikhr"], "9K121 Vikhr missile.jpg"),
  mphoto(["brahmos"], "BrahMos missile.jpg"),
  mphoto(["rudram"], "Rudram-1 anti-radiation missile.jpg"),
  mphoto(["gokdogan", "bozdogan"], "Göktuğ.jpg"),
  mphoto(["som-j"], "SOM-J missile.jpg"),
  mphoto(["kuzgun"], "Kuzgun munition.jpg"),
  mphoto(["akbaba"], "Akbaba anti-radiation missile.jpg"),
  mphoto(["cakir"], "Roketsan Cakir cruise missile.jpg"),
  mphoto(["yj-83", "c-802"], "YJ-83.jpg"),
  mphoto(["yj-91"], "YJ-91 missile.jpg"),
  mphoto(["kd-88"], "KD-88 missile.jpg"),
  mphoto(["cm-400", "akf-98", "kd-20"], "CM-400AKG missile.jpg"),
  mphoto(["sea eagle"], "Sea Eagle missile IWM.jpg"),
  mphoto(["mar-1"], "MAR-1 missile.jpg"),
  mphoto(["agm-142", "popeye"], "AGM-142 Have Nap.jpg"),
  mphoto(["maa-1", "piranha"], "MAA-1 Piranha missile.jpg"),
  mphoto(["hydra", "apkws", "crv7"], "Hydra 70 01.jpg"),
  mphoto(["s-5", "s-8", "s-13", "s-24", "s-25"], "S-8 unguided missile in Park Patriot 01.jpg"),
  mphoto(["roket podlari", "roket podu", "lau roket"], "Hydra 70 01.jpg"),
  mphoto(["serbest dusus bombalari", "serbest dusus bomba"], "Mark82Bomb.JPEG"),
  mphoto(["lazer gudumlu bombalar", "lazer gudumlu bomba", "lazer/gps gudumlu", "gps gudumlu bombalar"], "GBU-12 Paveway II (11931072113).jpg"),
  mphoto(["ulusal kitler", "yerel kitler", "gudum kitleri", "gudumlu kitler", "gudumlu yuk", "hassas muhimmat"], "Teber guidance kit.jpg"),
  mphoto(["gau-8"], "GAU-8 Avenger.jpg"),
  mphoto(["m61"], "M61 Vulcan.jpg"),
  mphoto(["20 mm top", "20 mm top podu"], "M61 Vulcan.jpg"),
  mphoto(["gsh"], "GSh-30-1 aircraft cannon.jpg"),
  mphoto(["30 mm top", "23 mm top", "top podu"], "GSh-30-1 aircraft cannon.jpg"),
  mphoto(["aden"], "ADEN cannon.jpg"),
  mphoto(["defa"], "DEFA cannon.jpg"),
  mphoto(["m39"], "M39 cannon.jpg"),
  mphoto(["alq-99", "next generation jammer"], "AN ALQ-99 Tactical Jamming System.jpg"),
  mphoto(["talios"], "TALIOS targeting pod.jpg"),
  mphoto(["hedefleme", "kesif", "kimlik pod"], "Lockheed Martin Sniper XR targeting pod.jpg"),
  mphoto(["egitim yukleri", "egitim podlari"], "BDU-33 practice bomb.jpg"),
  mphoto(["yakin destek yukleri"], "Hydra 70 01.jpg"),
  mphoto(["kisa menzil egitim", "gorev fuzeleri"], "AIM-9 Sidewinder.jpg"),
  mphoto(["milli kisa-orta"], "Göktuğ.jpg"),
  mphoto(["r-550"], "R550 Magic 2 (cropped).jpg"),
  mphoto(["ls/lt", "ls lt", "lt gudumlu"], "LS-6 precision-guided glide bomb.jpg"),
  mphoto(["yakit tank", "harici yakit", "harici tank", "harici yuk"], "F-16 drop tank.jpg"),
];

const localImageIds = new Set(Object.keys(aircraft));
const imageSourceOverrides = window.AIRCRAFT_IMAGE_SOURCES || {};

Object.entries(aircraft).forEach(([id, item]) => {
  const sourceOverride = imageSourceOverrides[id];
  item.remoteImage = sourceOverride?.imageUrl || item.image;
  item.source = sourceOverride?.sourcePage || item.source;
  item.localImage = `assets/aircraft/${id}.jpg`;
  item.backupImage = `assets/aircraft/${imageBackups[id] || id}.jpg`;
  item.image = localImageIds.has(id) ? item.localImage : item.remoteImage;
});

const countries = [
  country("us", "Amerika Birleşik Devletleri", "United States", "USA", "NATO", 39.8, -98.6, {
    geoNames: ["United States of America", "United States"],
    command: "USAF / US Navy / USMC",
    focus: "Hava üstünlüğü, stealth taarruz, deniz konuşlu güç, elektronik harp ve yakın destek",
    description:
      "ABD, beşinci nesil F-35/F-22 katmanı, F-15 ve F-16 omurgası, uçak gemisi havacılığı, elektronik taarruz ve yakın hava desteğiyle dünyanın en geniş muharip uçak portföylerinden birini işletir.",
    aircraft: ["f35a", "f35b", "f35c", "f22", "f15ex", "f15e", "f15c", "f16", "fa18", "ea18g", "a10c", "harrier"],
  }),
  country("tr", "Türkiye", "Turkey", "TUR", "NATO", 39.0, 35.2, {
    geoNames: ["Turkey", "Türkiye"],
    command: "Türk Hava Kuvvetleri",
    focus: "F-16 modernizasyonu, milli muharip uçak programı, bölgesel caydırıcılık",
    description:
      "Türkiye'nin muharip jet omurgası F-16 filosudur; F-4E 2020 geçiş rolünde kalırken KAAN programı gelecek nesil kabiliyet hedefini temsil eder.",
    aircraft: ["f16", "f4", "kaan"],
  }),
  country("gb", "Birleşik Krallık", "United Kingdom", "GBR", "NATO", 55.0, -3.4, {
    geoNames: ["United Kingdom"],
    command: "Royal Air Force / Fleet Air Arm",
    focus: "Typhoon hava savunması, F-35B deniz konuşlu taarruz",
    description:
      "Birleşik Krallık, Typhoon ile hava savunmasını; F-35B ile uçak gemisi merkezli stealth taarruz kapasitesini yürütür.",
    aircraft: ["typhoon", "f35b"],
  }),
  country("fr", "Fransa", "France", "FRA", "NATO", 46.2, 2.2, {
    command: "Armée de l'Air et de l'Espace / Aéronavale",
    focus: "Rafale merkezli çok rollü güç, deniz havacılığı, stratejik caydırıcılık",
    description:
      "Fransa, Rafale etrafında kara ve deniz konuşlu çok rollü bir yapı kurar; Mirage 2000 filoları geçiş ve tamamlayıcı görevlerde kullanılır.",
    aircraft: ["rafale", "mirage2000"],
  }),
  country("de", "Almanya", "Germany", "DEU", "NATO", 51.1, 10.4, {
    command: "Luftwaffe",
    focus: "Eurofighter hava savunması, Tornado geçiş görevleri",
    description:
      "Almanya'nın muharip jet yapısı Eurofighter etrafında güçlenirken Tornado filosu kademeli yenileme sürecindedir.",
    aircraft: ["typhoon", "tornado"],
  }),
  country("it", "İtalya", "Italy", "ITA", "NATO", 42.8, 12.5, {
    command: "Aeronautica Militare / Marina Militare",
    focus: "Eurofighter, F-35A/B ve deniz konuşlu güç",
    description:
      "İtalya, Eurofighter ile hava savunmasını; F-35A/B ile stealth ve deniz konuşlu görev kapasitesini birleştirir.",
    aircraft: ["typhoon", "f35a", "f35b", "tornado"],
  }),
  country("es", "İspanya", "Spain", "ESP", "NATO", 40.4, -3.7, {
    command: "Ejército del Aire y del Espacio / Armada",
    focus: "Eurofighter, Hornet ve deniz konuşlu Harrier",
    description:
      "İspanya'nın muharip jet yapısı Eurofighter ve EF-18 etrafında şekillenir; Harrier filosu deniz konuşlu geçiş kapasitesi sağlar.",
    aircraft: ["typhoon", "f18hornet", "harrier"],
  }),
  country("pl", "Polonya", "Poland", "POL", "NATO", 52.0, 19.1, {
    command: "Polish Air Force",
    focus: "F-16, FA-50 geçiş kapasitesi, F-35 hazırlığı",
    description:
      "Polonya, F-16 filosunu modern ana platform olarak kullanırken FA-50 ve F-35 tedarikleriyle hızlı kabiliyet genişlemesi hedefler.",
    aircraft: ["f16", "f35a", "fa50", "mig29"],
  }),
  country("nl", "Hollanda", "Netherlands", "NLD", "NATO", 52.1, 5.3, {
    command: "Royal Netherlands Air Force",
    focus: "F-35A merkezli stealth entegrasyonu",
    description:
      "Hollanda, F-16 döneminden F-35A merkezli bir beşinci nesil hava gücü yapısına geçmiştir.",
    aircraft: ["f35a"],
  }),
  country("no", "Norveç", "Norway", "NOR", "NATO", 61.0, 8.5, {
    command: "Royal Norwegian Air Force",
    focus: "F-35A, kuzey hava savunması, Arktik operasyonlar",
    description:
      "Norveç, F-35A filosuyla kuzey kanat hava savunmasında yüksek teknoloji ve sensör paylaşımı odaklı bir model kullanır.",
    aircraft: ["f35a"],
  }),
  country("se", "İsveç", "Sweden", "SWE", "NATO", 60.1, 18.6, {
    command: "Swedish Air Force",
    focus: "Gripen, dağınık üs konsepti, kuzey savunması",
    description:
      "İsveç'in Gripen ağırlıklı hava gücü, kısa pistlerden çalışma ve hızlı bakım konseptiyle NATO'nun kuzey mimarisini güçlendirir.",
    aircraft: ["gripen"],
  }),
  country("fi", "Finlandiya", "Finland", "FIN", "NATO", 64.0, 26.0, {
    command: "Finnish Air Force",
    focus: "F/A-18 geçişi ve F-35A dönüşümü",
    description:
      "Finlandiya, Hornet filosundan F-35A'ya geçiş planıyla kuzey Avrupa hava savunmasını beşinci nesil platformlara taşıyor.",
    aircraft: ["f18hornet", "f35a"],
  }),
  country("gr", "Yunanistan", "Greece", "GRC", "NATO", 39.1, 22.9, {
    command: "Hellenic Air Force",
    focus: "F-16V modernizasyonu, Rafale, Ege hava savunması",
    description:
      "Yunanistan, modernize F-16 filosunu Rafale ile tamamlayarak Ege merkezli hava savunması ve çok rollü taarruz kapasitesini güçlendirir.",
    aircraft: ["f16", "rafale", "mirage2000", "f4"],
  }),
  country("ca", "Kanada", "Canada", "CAN", "NATO", 56.1, -106.3, {
    geoNames: ["Canada"],
    command: "Royal Canadian Air Force",
    focus: "Kuzey Amerika hava savunması, CF-18 ve F-35A geçişi",
    description:
      "Kanada, NORAD görevleri için CF-18 filosunu kullanırken F-35A ile yeni nesil hava savunma kapasitesine geçiş planlar.",
    aircraft: ["cf18", "f35a"],
  }),
  country("pt", "Portekiz", "Portugal", "PRT", "NATO", 39.4, -8.2, {
    command: "Portuguese Air Force",
    focus: "F-16 ile hava savunması ve NATO görevleri",
    description: "Portekiz'in muharip jet kapasitesi F-16 etrafında yoğunlaşır ve NATO hava polisliği görevlerinde rol alır.",
    aircraft: ["f16"],
  }),
  country("ro", "Romanya", "Romania", "ROU", "NATO", 45.9, 24.9, {
    command: "Romanian Air Force",
    focus: "F-16 geçişi, doğu kanadı hava savunması",
    description:
      "Romanya, F-16 filosuyla doğu kanadı hava savunmasını güçlendirir ve gelecek nesil platformlara geçiş için hazırlık yapar.",
    aircraft: ["f16"],
  }),
  country("cz", "Çekya", "Czechia", "CZE", "NATO", 49.8, 15.5, {
    geoNames: ["Czechia", "Czech Republic"],
    command: "Czech Air Force",
    focus: "Gripen hava polisliği, L-159 hafif taarruz",
    description: "Çekya, Gripen kiralama modeli ve L-159 hafif platformlarıyla kompakt bir NATO hava gücü yapısı kullanır.",
    aircraft: ["gripen", "l159"],
  }),
  country("hu", "Macaristan", "Hungary", "HUN", "NATO", 47.2, 19.5, {
    command: "Hungarian Air Force",
    focus: "Gripen ile hava polisliği ve NATO görevleri",
    description: "Macaristan'ın muharip jet kapasitesi Saab Gripen filosu etrafında kuruludur.",
    aircraft: ["gripen"],
  }),
  country("be", "Belçika", "Belgium", "BEL", "NATO", 50.5, 4.5, {
    command: "Belgian Air Component",
    focus: "F-16 operasyonları, F-35A geçişi",
    description: "Belçika, F-16 filosundan F-35A merkezli yeni nesil bir yapıya geçiş sürecindedir.",
    aircraft: ["f16", "f35a"],
  }),
  country("dk", "Danimarka", "Denmark", "DNK", "NATO", 56.2, 9.5, {
    command: "Royal Danish Air Force",
    focus: "F-16 geçişi ve F-35A entegrasyonu",
    description: "Danimarka, F-16'dan F-35A'ya geçerek kuzey kanatta stealth odaklı NATO kapasitesi oluşturur.",
    aircraft: ["f16", "f35a"],
  }),
  country("bg", "Bulgaristan", "Bulgaria", "BGR", "NATO", 42.7, 25.5, {
    command: "Bulgarian Air Force",
    focus: "MiG-29 geçişi, F-16 Block 70 hazırlığı",
    description: "Bulgaristan, Sovyet mirası MiG-29'lardan F-16 tabanlı NATO uyumlu bir yapıya geçiş sürecindedir.",
    aircraft: ["mig29", "f16"],
  }),
  country("hr", "Hırvatistan", "Croatia", "HRV", "NATO", 45.1, 15.2, {
    command: "Croatian Air Force",
    focus: "Rafale geçişi",
    description: "Hırvatistan, Rafale tedarikiyle eski MiG-21 döneminden modern çok rollü platforma geçmiştir.",
    aircraft: ["rafale"],
  }),
  country("sk", "Slovakya", "Slovakia", "SVK", "NATO", 48.7, 19.7, {
    command: "Slovak Air Force",
    focus: "F-16 Block 70 geçişi",
    description: "Slovakya, MiG-29 sonrası F-16 Block 70 üzerinden NATO uyumlu muharip jet kapasitesine geçiş yapıyor.",
    aircraft: ["f16"],
  }),
  country("al", "Arnavutluk", "Albania", "ALB", "NATO", 41.2, 20.1, {
    command: "Albanian Air Force",
    focus: "Hava sahası gözetimi, NATO hava polisliği desteği",
    description:
      "Arnavutluk'un aktif muharip jet filosu bulunmaz; hava polisliği ve savunma katkısı NATO müşterek yapısıyla desteklenir.",
    aircraft: [],
  }),
  country("ee", "Estonya", "Estonia", "EST", "NATO", 58.6, 25.0, {
    command: "Estonian Defence Forces",
    focus: "Baltık hava polisliği",
    description: "Estonya'nın aktif savaş uçağı filosu yoktur; Baltık hava polisliği NATO müttefikleri tarafından yürütülür.",
    aircraft: [],
  }),
  country("lv", "Letonya", "Latvia", "LVA", "NATO", 56.9, 24.6, {
    command: "Latvian National Armed Forces",
    focus: "Baltık hava polisliği",
    description: "Letonya'nın aktif muharip jet filosu bulunmaz; hava savunması NATO hava polisliği ve yer tabanlı sistemlerle desteklenir.",
    aircraft: [],
  }),
  country("lt", "Litvanya", "Lithuania", "LTU", "NATO", 55.2, 23.9, {
    command: "Lithuanian Armed Forces",
    focus: "Baltık hava polisliği",
    description: "Litvanya'nın aktif muharip jet filosu bulunmaz; Baltık hava polisliği NATO rotasyonlarıyla sağlanır.",
    aircraft: [],
  }),
  country("lu", "Lüksemburg", "Luxembourg", "LUX", "NATO", 49.8, 6.1, {
    command: "Luxembourg Armed Forces",
    focus: "Müşterek NATO katkısı",
    description: "Lüksemburg'un savaş uçağı filosu yoktur; NATO içindeki katkısı müşterek kabiliyetler ve finansman üzerinden şekillenir.",
    aircraft: [],
  }),
  country("is", "İzlanda", "Iceland", "ISL", "NATO", 64.9, -19.0, {
    command: "Icelandic Coast Guard / NATO hava polisliği",
    focus: "Müttefik hava polisliği",
    description: "İzlanda'nın sürekli ordusu ve muharip jet filosu yoktur; hava sahası NATO rotasyonlarıyla korunur.",
    aircraft: [],
  }),
  country("me", "Karadağ", "Montenegro", "MNE", "NATO", 42.7, 19.3, {
    command: "Montenegrin Armed Forces",
    focus: "Müttefik hava polisliği",
    description: "Karadağ'ın aktif savaş uçağı filosu bulunmaz; hava polisliği NATO ortak görevleriyle desteklenir.",
    aircraft: [],
  }),
  country("mk", "Kuzey Makedonya", "North Macedonia", "MKD", "NATO", 41.6, 21.7, {
    geoNames: ["North Macedonia", "Macedonia"],
    command: "Army of North Macedonia",
    focus: "Müttefik hava polisliği",
    description: "Kuzey Makedonya'nın aktif muharip jet filosu yoktur; NATO hava polisliği şemsiyesinden yararlanır.",
    aircraft: [],
  }),
  country("si", "Slovenya", "Slovenia", "SVN", "NATO", 46.1, 14.9, {
    command: "Slovenian Armed Forces",
    focus: "Müttefik hava polisliği",
    description: "Slovenya'nın aktif muharip jet filosu bulunmaz; hava sahası NATO müttefik görevleriyle desteklenir.",
    aircraft: [],
  }),
  country("br", "Brezilya", "Brazil", "BRA", "BRICS", -10.8, -52.9, {
    geoNames: ["Brazil"],
    command: "Força Aérea Brasileira",
    focus: "Gripen E/F dönüşümü, geniş coğrafyada hava savunması",
    description:
      "Brezilya, F-5 modernizasyonlarından Gripen E/F platformuna geçerek daha modern ve yerli sanayi bağlantılı bir hava gücü inşa ediyor.",
    aircraft: ["gripen", "f5", "amx"],
  }),
  country("ru", "Rusya", "Russia", "RUS", "BRICS", 61.5, 105.3, {
    geoNames: ["Russia", "Russian Federation"],
    command: "Russian Aerospace Forces",
    focus: "Ağır av uçakları, uzun menzilli önleme, taarruz, yakın destek ve deniz havacılığı",
    description:
      "Rusya, Su-27 ailesinden türeyen ağır av platformları, MiG-31 önleyicileri, Su-34/Su-24 taarruz katmanı, Su-25 yakın destek uçakları ve sınırlı sayıda Su-57 ile çok geniş bir filo yapısı kullanır.",
    aircraft: ["su57", "su35", "su30sm", "su34", "mig31", "su27", "mig29", "mig35", "su33", "su24", "su25"],
  }),
  country("in", "Hindistan", "India", "IND", "BRICS", 21.0, 78.9, {
    geoNames: ["India"],
    command: "Indian Air Force",
    focus: "Su-30MKI omurgası, Rafale, yerli Tejas",
    description:
      "Hindistan, ağır Su-30MKI filosunu Rafale, Tejas, MiG-29K/UPG, Mirage 2000 ve Jaguar taarruz uçaklarıyla tamamlayan çok katmanlı bir muharip jet mimarisi kullanır.",
    aircraft: ["su30mki", "rafale", "tejas", "mig29", "mig29k", "mirage2000", "jaguar"],
  }),
  country("cn", "Çin", "China", "CHN", "BRICS", 35.8, 104.2, {
    geoNames: ["China", "People's Republic of China"],
    command: "People's Liberation Army Air Force / Navy",
    focus: "J-20, ağır J-16/J-11, J-10C, uçak gemisi J-15 ve taarruz platformları",
    description:
      "Çin, beşinci nesil J-20 ile J-16/J-11 ağır av ailesini, J-10C hafif-orta katmanını, J-15 deniz havacılığını ve JH-7A taarruz platformlarını birlikte kullanan hızlı ölçeklenen bir hava gücü yapısı kurmuştur.",
    aircraft: ["j20", "j16", "j10c", "j11", "j15", "jh7a", "su30mkk", "su35"],
  }),
  country("za", "Güney Afrika", "South Africa", "ZAF", "BRICS", -30.6, 22.9, {
    geoNames: ["South Africa"],
    command: "South African Air Force",
    focus: "Gripen C/D, sınırlı ama modern çekirdek filo",
    description:
      "Güney Afrika'nın muharip jet kapasitesi Gripen C/D filosu etrafındadır; operasyonel tempo ve bütçe faktörleri kapasite kullanımını etkiler.",
    aircraft: ["gripen"],
  }),
  country("sa", "Suudi Arabistan", "Saudi Arabia", "SAU", "BRICS", 23.9, 45.1, {
    geoNames: ["Saudi Arabia"],
    command: "Royal Saudi Air Force",
    focus: "F-15 ağır platformları, Typhoon, bölgesel hava üstünlüğü",
    description:
      "Suudi Arabistan, F-15SA/S ve Typhoon filolarıyla Körfez bölgesinde yüksek hızlı, yüksek mühimmat kapasiteli bir hava gücü işletir.",
    aircraft: ["f15sa", "f15c", "typhoon", "tornado"],
  }),
  country("eg", "Mısır", "Egypt", "EGY", "BRICS", 26.8, 30.8, {
    geoNames: ["Egypt"],
    command: "Egyptian Air Force",
    focus: "F-16, Rafale, MiG-29M/M2, Doğu Akdeniz ve Kızıldeniz görevleri",
    description:
      "Mısır, Batı ve Rus kökenli platformları bir arada kullanan çeşitlendirilmiş bir muharip jet envanterine sahiptir.",
    aircraft: ["f16", "rafale", "mig29", "mirage2000", "f7"],
  }),
  country("ae", "Birleşik Arap Emirlikleri", "United Arab Emirates", "ARE", "BRICS", 24.0, 54.0, {
    geoNames: ["United Arab Emirates", "United Arab Emirates (UAE)"],
    command: "UAE Air Force",
    focus: "F-16E/F Block 60, Mirage 2000-9, yüksek teknoloji entegrasyonu",
    description:
      "BAE, F-16E/F Block 60 ve Mirage 2000-9 gibi gelişmiş modernizasyon paketleriyle küçük ama yüksek teknoloji odaklı bir filo işletir.",
    aircraft: ["f16ef", "mirage20009", "rafale"],
  }),
  country("et", "Etiyopya", "Ethiopia", "ETH", "BRICS", 9.1, 40.5, {
    geoNames: ["Ethiopia"],
    command: "Ethiopian Air Force",
    focus: "Sovyet/Rus kökenli platformlar, bölgesel hava savunması",
    description:
      "Etiyopya'nın muharip jet yapısı daha eski Sovyet/Rus kökenli platformlara dayanır; modern veri açık kaynaklarda sınırlıdır.",
    aircraft: ["su27", "mig23", "su25"],
  }),
  country("id", "Endonezya", "Indonesia", "IDN", "BRICS", -2.5, 118.0, {
    geoNames: ["Indonesia"],
    command: "Indonesian Air Force",
    focus: "F-16, Su-27/30, Rafale tedariki ve ada coğrafyası",
    description:
      "Endonezya, geniş ada coğrafyasında F-16 ve Su-27/30 ailesini kullanır; Rafale tedarikiyle modernizasyon hedefler.",
    aircraft: ["f16", "su30mkk", "su27", "t50i", "hawk200", "rafale"],
  }),
  country("ir", "İran", "Iran", "IRN", "BRICS", 32.4, 53.7, {
    geoNames: ["Iran"],
    command: "Islamic Republic of Iran Air Force",
    focus: "Eski ABD platformları, yerli modernizasyon, sınırlı tedarik",
    description:
      "İran, F-14, F-4, F-5 ve MiG-29 gibi yaşlı platformları bakım/modernizasyon kabiliyetiyle ayakta tutan karma bir filo yapısına sahiptir.",
    aircraft: ["f14", "f4", "f5", "mig29", "su24", "f7", "saeqeh"],
  }),
];

const aircraftConfidenceLabels = {
  official: { label: "Resmi/açık kaynak", labelEn: "Official/open source", className: "official" },
  open: { label: "Açık kaynak", labelEn: "Open source", className: "open" },
  conditional: { label: "Modernizasyon bağımlı", labelEn: "Modernization dependent", className: "conditional" },
  estimated: { label: "Tahmini", labelEn: "Estimated", className: "estimated" },
  legacy: { label: "Tarihsel/legacy", labelEn: "Historical/legacy", className: "legacy" },
};

const countryAircraftProfiles = {
  "us:f35a": {
    variant: "F-35A Lightning II",
    confidence: "official",
    sourceTier: "Resmi/açık kaynak platform kartları",
    modernization: "Blok ve TR-3/Block 4 geçişleri kullanıcı takvimine bağlıdır.",
    note: "ABD bağlamında F-35A, USAF stealth çok rollü katmanı olarak okunmalı.",
    signalAdjustments: { Stealth: 4, Modernlik: 4 },
  },
  "us:f35b": {
    variant: "F-35B Lightning II STOVL",
    confidence: "official",
    sourceTier: "Resmi/açık kaynak platform kartları",
    modernization: "STOVL deniz/ileri üs kullanım konsepti öne çıkar.",
    note: "ABD Deniz Piyadeleri ve deniz konuşlu görev bağlamında ayrışır.",
    signalAdjustments: { Deniz: 8, Stealth: 3 },
  },
  "us:f35c": {
    variant: "F-35C Lightning II Carrier Variant",
    confidence: "official",
    sourceTier: "Resmi/açık kaynak platform kartları",
    modernization: "Uçak gemisi hava kanadı entegrasyonu ve uzun menzil odağı.",
    note: "F-35C, deniz konuşlu stealth taarruz katmanı olarak okunmalı.",
    signalAdjustments: { Deniz: 10, Stealth: 3 },
  },
  "us:f16": {
    variant: "F-16C/D Fighting Falcon",
    confidence: "official",
    sourceTier: "USAF / açık kaynak katalog",
    modernization: "C/D filosu görev ve blok seviyesine göre değişir.",
    note: "ABD bağlamında F-16, olgun çok rollü filo ve eğitim/taarruz omurgasıdır.",
    signalAdjustments: { Modernlik: 2, Taarruz: 2 },
  },
  "tr:f16": {
    variant: "F-16C/D Block 30/40/50/50+",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "ÖZGÜR ve aviyonik modernizasyon kapsamı uçak/blok bazında değişir.",
    note: "Türkiye bağlamında F-16, ana muharip jet omurgasıdır; kabiliyet yorumu blok ve modernizasyon paketine bağlıdır.",
    signalAdjustments: { Modernlik: 5, Taarruz: 3 },
  },
  "tr:f4": {
    variant: "F-4E 2020 Terminator",
    confidence: "legacy",
    sourceTier: "Açık kaynak / tarihsel-modernizasyon verisi",
    modernization: "Geçiş ve derin taarruz rolü; filo durumu zamanla daralır.",
    note: "F-4E 2020, yaşlı ama modernize edilmiş bir geçiş platformu olarak etiketlenir.",
    signalAdjustments: { Taarruz: 4, Modernlik: -8, Stealth: -4 },
  },
  "tr:kaan": {
    variant: "KAAN / TF-X",
    confidence: "conditional",
    sourceTier: "Program duyuruları / açık kaynak",
    modernization: "Geliştirme ve hizmete giriş takvimi program aşamasına bağlıdır.",
    note: "KAAN, mevcut operasyonel filo yerine gelecek nesil hedef kabiliyeti olarak okunmalı.",
    signalAdjustments: { Stealth: 7, Modernlik: 8 },
  },
  "gb:typhoon": {
    variant: "Eurofighter Typhoon FGR4",
    confidence: "official",
    sourceTier: "RAF / açık kaynak platform verisi",
    modernization: "Radar, sensör ve silah entegrasyon paketleri tranche/upgrade seviyesine bağlıdır.",
    note: "Birleşik Krallık bağlamında Typhoon, hava savunması ve çok rollü görevlerde ana platformdur.",
    signalAdjustments: { "Hava-hava": 5, Modernlik: 3 },
  },
  "gb:f35b": {
    variant: "F-35B Lightning II",
    confidence: "official",
    sourceTier: "RAF/Fleet Air Arm açık kaynak",
    modernization: "Queen Elizabeth sınıfı uçak gemisi konseptiyle birlikte okunur.",
    note: "Birleşik Krallık bağlamında F-35B deniz konuşlu stealth görevleriyle ayrışır.",
    signalAdjustments: { Deniz: 9, Stealth: 4 },
  },
  "fr:rafale": {
    variant: "Rafale B/C/M",
    confidence: "official",
    sourceTier: "Dassault / Fransız açık kaynak verisi",
    modernization: "F3R/F4 gibi standartlar görev kabiliyetini belirgin biçimde etkiler.",
    note: "Fransa bağlamında Rafale, hava-hava, taarruz, deniz ve stratejik görevleri tek ailede toplar.",
    signalAdjustments: { Modernlik: 5, Taarruz: 4, Deniz: 3 },
  },
  "de:typhoon": {
    variant: "Eurofighter Typhoon",
    confidence: "official",
    sourceTier: "Luftwaffe / açık kaynak",
    modernization: "Hava savunması öncelikli; modernizasyon paketleri filoya göre değişir.",
    note: "Almanya bağlamında Typhoon, Tornado sonrası ana muharip omurga olarak güçlenir.",
    signalAdjustments: { "Hava-hava": 4, Modernlik: 3 },
  },
  "it:f35a": {
    variant: "F-35A Lightning II",
    confidence: "official",
    sourceTier: "Açık kaynak NATO envanter özeti",
    modernization: "F-35A kara konuşlu stealth taarruz katmanını temsil eder.",
    note: "İtalya bağlamında F-35A, Eurofighter ile tamamlayıcı stealth çok rollü katmandır.",
    signalAdjustments: { Stealth: 4, Modernlik: 4 },
  },
  "it:f35b": {
    variant: "F-35B Lightning II STOVL",
    confidence: "official",
    sourceTier: "Açık kaynak NATO envanter özeti",
    modernization: "Deniz konuşlu/STOVL görev seti öne çıkar.",
    note: "İtalya bağlamında F-35B, donanma ve kısa pist konseptiyle ayrışır.",
    signalAdjustments: { Deniz: 9, Stealth: 4 },
  },
  "gr:f16": {
    variant: "F-16C/D Block 52+ / F-16V modernizasyon",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "Viper modernizasyonu ve blok farkları kabiliyet yorumunu etkiler.",
    note: "Yunanistan bağlamında F-16, modernize edilen ana çok rollü filo katmanıdır.",
    signalAdjustments: { Modernlik: 7, Taarruz: 2 },
  },
  "pl:f16": {
    variant: "F-16C/D Block 52+",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "F-35 ve FA-50 geçişiyle birlikte karma modernizasyon resmi oluşur.",
    note: "Polonya bağlamında F-16, F-35 gelene kadar modern çok rollü omurgadır.",
    signalAdjustments: { Modernlik: 4, Taarruz: 2 },
  },
  "eg:f16": {
    variant: "F-16C/D çok bloklu filo",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "Silah entegrasyonu ve blok seviyesi kullanıcı/tedarik kısıtlarına bağlıdır.",
    note: "Mısır bağlamında F-16, karma Batı/Rus/Fransız envanter içinde ana sayısal katmandır.",
    signalAdjustments: { Modernlik: -2 },
  },
  "ae:f16ef": {
    variant: "F-16E/F Block 60 Desert Falcon",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "Block 60 konfigürasyonu gelişmiş sensör ve görev bilgisayarı odağıyla ayrışır.",
    note: "BAE bağlamında F-16E/F, klasik F-16 ailesinden daha gelişmiş yerel varyant olarak okunmalı.",
    signalAdjustments: { Modernlik: 7, Taarruz: 3 },
  },
  "ru:su57": {
    variant: "Su-57 Felon",
    confidence: "conditional",
    sourceTier: "Açık kaynak / sınırlı operasyonel veri",
    modernization: "Üretim, motor ve görev sistemi olgunluğu açık kaynakta değişken raporlanır.",
    note: "Rusya bağlamında Su-57, beşinci nesil hedef kabiliyeti temsil eder; operasyonel ölçek ayrı doğrulanmalıdır.",
    signalAdjustments: { Stealth: 5, Modernlik: 4 },
  },
  "ru:su35": {
    variant: "Su-35S",
    confidence: "open",
    sourceTier: "Açık kaynak platform özeti",
    modernization: "Ağır av ve uzun menzilli hava-hava rolü öne çıkar.",
    note: "Rusya bağlamında Su-35S, ağır hava üstünlüğü katmanında güçlü bir dördüncü nesil üstü platformdur.",
    signalAdjustments: { "Hava-hava": 6, Modernlik: 3 },
  },
  "ru:su30sm": {
    variant: "Su-30SM / SM2",
    confidence: "open",
    sourceTier: "Açık kaynak varyant özeti",
    modernization: "SM2 modernizasyonu ve görev sistemi farkları kullanıcıya göre değişir.",
    note: "Rusya bağlamında Su-30SM, iki kişilik çok rollü ağır av/taarruz katmanıdır.",
    signalAdjustments: { Taarruz: 3, "Hava-hava": 3 },
  },
  "cn:j20": {
    variant: "J-20 Mighty Dragon",
    confidence: "conditional",
    sourceTier: "Açık kaynak / sınırlı resmi teknik veri",
    modernization: "Motor ve sensör konfigürasyonu bloklara göre değişebilir.",
    note: "Çin bağlamında J-20, uzun menzilli stealth hava üstünlüğü/önleme hedef kabiliyetiyle okunur.",
    signalAdjustments: { Stealth: 7, Modernlik: 6, "Hava-hava": 4 },
  },
  "cn:j16": {
    variant: "J-16",
    confidence: "open",
    sourceTier: "Açık kaynak platform özeti",
    modernization: "Ağır çok rollü taarruz ve sensör modernliği öne çıkar.",
    note: "Çin bağlamında J-16, ağır çok rollü görevlerde J-11 ailesinden ayrışır.",
    signalAdjustments: { Taarruz: 5, Modernlik: 5 },
  },
  "cn:j10c": {
    variant: "J-10C",
    confidence: "open",
    sourceTier: "Açık kaynak platform özeti",
    modernization: "AESA radar ve modern BVR silah entegrasyonu kabiliyet yorumunu yükseltir.",
    note: "Çin bağlamında J-10C, hafif/orta sınıf modern çok rollü katmandır.",
    signalAdjustments: { Modernlik: 6, "Hava-hava": 4 },
  },
  "in:su30mki": {
    variant: "Su-30MKI",
    confidence: "open",
    sourceTier: "Açık kaynak Hindistan varyant özeti",
    modernization: "Hindistan'a özgü aviyonik/silah entegrasyonları ve modernizasyon paketleri belirleyicidir.",
    note: "Hindistan bağlamında Su-30MKI, ağır çok rollü filonun ana omurgasıdır.",
    signalAdjustments: { Taarruz: 4, "Hava-hava": 4 },
  },
  "in:rafale": {
    variant: "Rafale EH/DH",
    confidence: "open",
    sourceTier: "Açık kaynak Hindistan varyant özeti",
    modernization: "Hindistan'a özgü paketler ve silah entegrasyonu görev yorumunu etkiler.",
    note: "Hindistan bağlamında Rafale, Su-30MKI yanında daha yeni sensör/silah katmanıdır.",
    signalAdjustments: { Modernlik: 6, Taarruz: 4 },
  },
  "in:tejas": {
    variant: "HAL Tejas Mk1 / Mk1A",
    confidence: "conditional",
    sourceTier: "Program duyuruları / açık kaynak",
    modernization: "Mk1A teslimat ve entegrasyon takvimi kabiliyet seviyesini belirler.",
    note: "Tejas, Hindistan'ın yerli hafif muharip uçak katmanı olarak ayrı etiketlenmelidir.",
    signalAdjustments: { Modernlik: 4 },
  },
  "br:gripen": {
    variant: "F-39E/F Gripen",
    confidence: "open",
    sourceTier: "Açık kaynak Brezilya varyant özeti",
    modernization: "Yerel üretim/entegrasyon ve teslimat takvimi filo etkisini belirler.",
    note: "Brezilya bağlamında Gripen, modernizasyonun ana yeni nesil platformudur.",
    signalAdjustments: { Modernlik: 7, "Hava-hava": 3 },
  },
  "za:gripen": {
    variant: "Gripen C/D",
    confidence: "open",
    sourceTier: "Açık kaynak ülke-varyant özeti",
    modernization: "Operasyonel tempo ve bütçe durumu kapasite kullanımını etkiler.",
    note: "Güney Afrika bağlamında Gripen modern ama sınırlı ölçekli çekirdek filodur.",
    signalAdjustments: { Modernlik: 2 },
  },
  "ir:f14": {
    variant: "F-14A Tomcat",
    confidence: "legacy",
    sourceTier: "Açık kaynak / tarihsel filo verisi",
    modernization: "Sürdürülebilirlik ve yerel modernizasyon açık kaynakta değişken raporlanır.",
    note: "İran bağlamında F-14, tarihsel ABD kökenli ama yerel bakım/modernizasyonla ayakta tutulan özel bir katmandır.",
    signalAdjustments: { "Hava-hava": 4, Modernlik: -10 },
  },
  "ir:f4": {
    variant: "F-4D/E Phantom II",
    confidence: "legacy",
    sourceTier: "Açık kaynak / tarihsel filo verisi",
    modernization: "Yaşlı platform; görev seviyesi bakım ve yerel modernizasyona bağlıdır.",
    note: "İran bağlamında F-4, tarihsel taarruz platformu olarak okunur.",
    signalAdjustments: { Modernlik: -10, Taarruz: 2 },
  },
};

const state = {
  language: DEFAULT_LANGUAGE,
  filter: "all",
  search: "",
  selectedCountryId: "us",
  selectedAircraftId: "f35a",
  mapReady: false,
  mapZoomBehavior: null,
  mapZoomTransform: null,
  mapLabelFrame: 0,
  pendingMapLabelScale: 1,
  currentUser: null,
  accountPanel: "profile",
  selectedMunitionName: "",
  selectedMunitionCategory: "",
  munitionFilter: "all",
  favoriteAircraftIds: new Set(),
  compareAircraftIds: [],
  activeAiQuestion: "",
  mockAiCategory: "general",
  mockAiAircraftA: "us:f35a",
  mockAiAircraftB: "ru:su57",
  countryCompareA: "us",
  countryCompareB: "cn",
  countryIntelFilter: "all",
};

const countryById = new Map(countries.map((item) => [item.id, item]));
const aircraftById = new Map(Object.entries(aircraft));

const elements = {};
document.addEventListener("DOMContentLoaded", init);

function init() {
  bindElements();
  migrateLegacyStorage();
  restoreLanguage();
  wireControls();
  applyLanguage({ render: false });
  restoreAnalysisTools();
  restoreAuthSession();
  applyUserSettings();
  renderAuthState();
  renderCompareState();
  renderSearchResults();
  selectCountry(state.selectedCountryId, state.selectedAircraftId);
  renderWorldMap();

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(debounce(renderWorldMap, 160));
    observer.observe(elements.worldMap);
  } else {
    window.addEventListener("resize", debounce(renderWorldMap, 160));
  }
}

function migrateLegacyStorage() {
  try {
    STORAGE_KEY_MIGRATIONS.forEach(([legacyKey, currentKey]) => {
      if (localStorage.getItem(currentKey) !== null) return;
      const legacyValue = localStorage.getItem(legacyKey);
      if (legacyValue !== null) localStorage.setItem(currentKey, legacyValue);
    });
  } catch (error) {
    console.warn("Depolama anahtarları taşınamadı", error);
  }
}

function bindElements() {
  Object.assign(elements, {
    worldMap: document.getElementById("worldMap"),
    fallbackMap: document.getElementById("fallbackMap"),
    mapReadout: document.getElementById("mapReadout"),
    zoomIn: document.getElementById("zoomIn"),
    zoomOut: document.getElementById("zoomOut"),
    zoomReset: document.getElementById("zoomReset"),
    zoomLevel: document.getElementById("zoomLevel"),
    languageSelect: document.getElementById("languageSelect"),
    countrySearch: document.getElementById("countrySearch"),
    countryResults: document.getElementById("countryResults"),
    allianceBadge: document.getElementById("allianceBadge"),
    countryCode: document.getElementById("countryCode"),
    countryName: document.getElementById("countryName"),
    countryDescription: document.getElementById("countryDescription"),
    countryCommand: document.getElementById("countryCommand"),
    countryFocus: document.getElementById("countryFocus"),
    countryAnalysisGrid: document.getElementById("countryAnalysisGrid"),
    countryTimelineStatus: document.getElementById("countryTimelineStatus"),
    countryTimeline: document.getElementById("countryTimeline"),
    inventoryCount: document.getElementById("inventoryCount"),
    aircraftList: document.getElementById("aircraftList"),
    aircraftInspect: document.getElementById("aircraftInspect"),
    inspectClose: document.getElementById("inspectClose"),
    inspectPrev: document.getElementById("inspectPrev"),
    inspectNext: document.getElementById("inspectNext"),
    inspectAircraftImage: document.getElementById("inspectAircraftImage"),
    inspectImageFallback: document.getElementById("inspectImageFallback"),
    inspectImageCredit: document.getElementById("inspectImageCredit"),
    inspectAllianceBadge: document.getElementById("inspectAllianceBadge"),
    inspectInventoryPosition: document.getElementById("inspectInventoryPosition"),
    inspectCountryContext: document.getElementById("inspectCountryContext"),
    inspectAircraftTitle: document.getElementById("inspectAircraftTitle"),
    inspectAircraftRole: document.getElementById("inspectAircraftRole"),
    inspectMetaGrid: document.getElementById("inspectMetaGrid"),
    inspectSpecGrid: document.getElementById("inspectSpecGrid"),
    inspectCapabilityBars: document.getElementById("inspectCapabilityBars"),
    inspectCapabilityRow: document.getElementById("inspectCapabilityRow"),
    inspectFavorite: document.getElementById("inspectFavorite"),
    inspectCompare: document.getElementById("inspectCompare"),
    inspectMunitionOpen: document.getElementById("inspectMunitionOpen"),
    inspectMunitionCount: document.getElementById("inspectMunitionCount"),
    inspectInventoryContext: document.getElementById("inspectInventoryContext"),
    inspectSourceGrid: document.getElementById("inspectSourceGrid"),
    inspectAircraftNote: document.getElementById("inspectAircraftNote"),
    munitionPanel: document.getElementById("munitionPanel"),
    munitionClose: document.getElementById("munitionClose"),
    munitionSubtitle: document.getElementById("munitionSubtitle"),
    munitionTitle: document.getElementById("munitionTitle"),
    munitionSummary: document.getElementById("munitionSummary"),
    munitionStats: document.getElementById("munitionStats"),
    munitionFilters: document.getElementById("munitionFilters"),
    munitionCategories: document.getElementById("munitionCategories"),
    munitionDetailImage: document.getElementById("munitionDetailImage"),
    munitionImageCredit: document.getElementById("munitionImageCredit"),
    munitionDetailCategory: document.getElementById("munitionDetailCategory"),
    munitionDetailName: document.getElementById("munitionDetailName"),
    munitionDetailDescription: document.getElementById("munitionDetailDescription"),
    munitionDetailRole: document.getElementById("munitionDetailRole"),
    munitionDetailGuidance: document.getElementById("munitionDetailGuidance"),
    munitionDetailOrigin: document.getElementById("munitionDetailOrigin"),
    munitionDetailNote: document.getElementById("munitionDetailNote"),
    aiBriefing: document.getElementById("aiBriefing"),
    aiQuestions: document.getElementById("aiQuestions"),
    countryAiSummary: document.getElementById("countryAiSummary"),
    signalBars: document.getElementById("signalBars"),
    refreshBriefing: document.getElementById("refreshBriefing"),
    countryCompareOpen: document.getElementById("countryCompareOpen"),
    menuOpen: document.getElementById("menuOpen"),
    commandMenu: document.getElementById("commandMenu"),
    menuClose: document.getElementById("menuClose"),
    menuCallSign: document.getElementById("menuCallSign"),
    menuAccountStatus: document.getElementById("menuAccountStatus"),
    menuAccountName: document.getElementById("menuAccountName"),
    menuAccountDetail: document.getElementById("menuAccountDetail"),
    menuAccountHint: document.getElementById("menuAccountHint"),
    menuCompareHint: document.getElementById("menuCompareHint"),
    menuFavoriteCount: document.getElementById("menuFavoriteCount"),
    menuFavoriteList: document.getElementById("menuFavoriteList"),
    menuSourcesPanel: document.getElementById("menuSourcesPanel"),
    comparePanel: document.getElementById("comparePanel"),
    compareClose: document.getElementById("compareClose"),
    compareSummary: document.getElementById("compareSummary"),
    compareGrid: document.getElementById("compareGrid"),
    mockAiOpen: document.getElementById("mockAiOpen"),
    mockAiPanel: document.getElementById("mockAiPanel"),
    mockAiClose: document.getElementById("mockAiClose"),
    mockAiSummary: document.getElementById("mockAiSummary"),
    mockAiCategory: document.getElementById("mockAiCategory"),
    mockAiAircraftA: document.getElementById("mockAiAircraftA"),
    mockAiAircraftB: document.getElementById("mockAiAircraftB"),
    mockAiRun: document.getElementById("mockAiRun"),
    mockAiSwap: document.getElementById("mockAiSwap"),
    mockAiVerdict: document.getElementById("mockAiVerdict"),
    mockAiScoreGrid: document.getElementById("mockAiScoreGrid"),
    mockAiAdvantageGrid: document.getElementById("mockAiAdvantageGrid"),
    mockAiBars: document.getElementById("mockAiBars"),
    countryComparePanel: document.getElementById("countryComparePanel"),
    countryCompareClose: document.getElementById("countryCompareClose"),
    countryCompareSummary: document.getElementById("countryCompareSummary"),
    countryCompareA: document.getElementById("countryCompareA"),
    countryCompareB: document.getElementById("countryCompareB"),
    countryCompareRun: document.getElementById("countryCompareRun"),
    countryCompareSwap: document.getElementById("countryCompareSwap"),
    countryCompareVerdict: document.getElementById("countryCompareVerdict"),
    countryCompareScoreGrid: document.getElementById("countryCompareScoreGrid"),
    countryCompareFactorGrid: document.getElementById("countryCompareFactorGrid"),
    countryCompareBars: document.getElementById("countryCompareBars"),
    countryIntelPanel: document.getElementById("countryIntelPanel"),
    countryIntelClose: document.getElementById("countryIntelClose"),
    countryIntelCode: document.getElementById("countryIntelCode"),
    countryIntelTitle: document.getElementById("countryIntelTitle"),
    countryIntelDescription: document.getElementById("countryIntelDescription"),
    countryIntelAlliance: document.getElementById("countryIntelAlliance"),
    countryIntelCommand: document.getElementById("countryIntelCommand"),
    countryIntelFocus: document.getElementById("countryIntelFocus"),
    countryIntelInventoryCount: document.getElementById("countryIntelInventoryCount"),
    countryRadarSummary: document.getElementById("countryRadarSummary"),
    countryRadarChart: document.getElementById("countryRadarChart"),
    countryRadarBars: document.getElementById("countryRadarBars"),
    countrySourceTrustScore: document.getElementById("countrySourceTrustScore"),
    countrySourceTrustSummary: document.getElementById("countrySourceTrustSummary"),
    countrySourceTrustMeter: document.getElementById("countrySourceTrustMeter"),
    countrySourceTrustGrid: document.getElementById("countrySourceTrustGrid"),
    countryCriticalAlertCount: document.getElementById("countryCriticalAlertCount"),
    countryCriticalAlertSummary: document.getElementById("countryCriticalAlertSummary"),
    countryCriticalAlertGrid: document.getElementById("countryCriticalAlertGrid"),
    countryIntelAnalysisGrid: document.getElementById("countryIntelAnalysisGrid"),
    countryIntelTimelineStatus: document.getElementById("countryIntelTimelineStatus"),
    countryIntelTimeline: document.getElementById("countryIntelTimeline"),
    countryIntelInventoryTitle: document.getElementById("countryIntelInventoryTitle"),
    countryIntelCompare: document.getElementById("countryIntelCompare"),
    countryIntelFilters: document.getElementById("countryIntelFilters"),
    countryIntelFilterSummary: document.getElementById("countryIntelFilterSummary"),
    countryIntelAircraftList: document.getElementById("countryIntelAircraftList"),
    authOpen: document.getElementById("authOpen"),
    authTriggerText: document.getElementById("authTriggerText"),
    authModal: document.getElementById("authModal"),
    authClose: document.getElementById("authClose"),
    authTabs: document.getElementById("authTabs"),
    loginForm: document.getElementById("loginForm"),
    forgotPasswordOpen: document.getElementById("forgotPasswordOpen"),
    forgotPasswordForm: document.getElementById("forgotPasswordForm"),
    forgotPasswordNote: document.getElementById("forgotPasswordNote"),
    forgotEmail: document.getElementById("forgotEmail"),
    forgotPassword: document.getElementById("forgotPassword"),
    forgotPasswordConfirm: document.getElementById("forgotPasswordConfirm"),
    forgotBackLogin: document.getElementById("forgotBackLogin"),
    registerForm: document.getElementById("registerForm"),
    loginEmail: document.getElementById("loginEmail"),
    loginPassword: document.getElementById("loginPassword"),
    registerName: document.getElementById("registerName"),
    registerEmail: document.getElementById("registerEmail"),
    registerPassword: document.getElementById("registerPassword"),
    registerPasswordConfirm: document.getElementById("registerPasswordConfirm"),
    registerProfile: document.getElementById("registerProfile"),
    authAccountTabs: document.getElementById("authAccountTabs"),
    authProfile: document.getElementById("authProfile"),
    authCallSign: document.getElementById("authCallSign"),
    authUserName: document.getElementById("authUserName"),
    authUserEmail: document.getElementById("authUserEmail"),
    authUserProfile: document.getElementById("authUserProfile"),
    profileForm: document.getElementById("profileForm"),
    profileName: document.getElementById("profileName"),
    profileType: document.getElementById("profileType"),
    authCreatedAt: document.getElementById("authCreatedAt"),
    authLastCountry: document.getElementById("authLastCountry"),
    authLastAircraft: document.getElementById("authLastAircraft"),
    authDefaultFilter: document.getElementById("authDefaultFilter"),
    settingsForm: document.getElementById("settingsForm"),
    settingsDefaultFilter: document.getElementById("settingsDefaultFilter"),
    settingsInventoryDensity: document.getElementById("settingsInventoryDensity"),
    settingsRememberSelection: document.getElementById("settingsRememberSelection"),
    settingsReducedMotion: document.getElementById("settingsReducedMotion"),
    settingsHighContrast: document.getElementById("settingsHighContrast"),
    authLogout: document.getElementById("authLogout"),
    authMessage: document.getElementById("authMessage"),
  });
}

function restoreLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    state.language = ["tr", "en"].includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    state.language = DEFAULT_LANGUAGE;
  }
}

function setLanguage(language) {
  const nextLanguage = ["tr", "en"].includes(language) ? language : DEFAULT_LANGUAGE;
  if (state.language === nextLanguage) return;

  state.language = nextLanguage;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  } catch {
    // Language selection still works for the current session.
  }
  applyLanguage({ render: true });
}

function applyLanguage(options = {}) {
  document.documentElement.lang = t("htmlLang");
  document.title = t("title");
  if (elements.languageSelect) {
    elements.languageSelect.value = state.language;
    elements.languageSelect.setAttribute("aria-label", t("languageAria"));
  }

  applyStaticLanguage();
  if (options.render !== false) refreshLocalizedViews();
}

function applyStaticLanguage() {
  setElementText(".brand-block .eyebrow", t("brandEyebrow"));
  setElementText(".brand-block h1", t("title"));

  document.querySelector(".status-strip")?.setAttribute("aria-label", t("statusAria"));
  setTrailingText(".status-strip span:nth-child(1)", t("statusMap"));
  setTrailingText(".status-strip span:nth-child(2)", t("statusData"));
  setTrailingText(".status-strip span:nth-child(3)", t("statusLanguage"));
  setElementText(".language-switch span", t("languageLabel"));
  setElementText("#menuOpen span:last-child", t("menu"));
  if (!state.currentUser) elements.authTriggerText.textContent = t("authGuest");

  setElementText(".map-console .console-head .eyebrow", t("mapEyebrow"));
  setElementText("#mapTitle", t("mapTitle"));
  document.querySelector(".segmented-control")?.setAttribute("aria-label", t("allianceFilterAria"));
  document.querySelector('[data-filter="all"]') && (document.querySelector('[data-filter="all"]').textContent = t("all"));
  elements.worldMap?.setAttribute("aria-label", t("mapAria"));
  document.querySelector(".map-zoom-controls")?.setAttribute("aria-label", t("zoomControlsAria"));
  elements.zoomIn?.setAttribute("aria-label", t("zoomInAria"));
  elements.zoomOut?.setAttribute("aria-label", t("zoomOutAria"));
  elements.zoomReset?.setAttribute("aria-label", t("zoomResetAria"));
  setTrailingText(".legend-row span:nth-child(1)", t("legendNato"));
  setTrailingText(".legend-row span:nth-child(2)", t("legendBrics"));
  setTrailingText(".legend-row span:nth-child(3)", t("legendNeutral"));

  document.querySelector(".intel-console")?.setAttribute("aria-label", t("intelConsoleAria"));
  setElementText('label[for="countrySearch"]', t("countrySearchLabel"));
  elements.countrySearch.placeholder = t("countrySearchPlaceholder");
  elements.countryResults?.setAttribute("aria-label", t("countryResultsAria"));
  setElementText(".country-summary .metric-grid div:nth-child(1) dt", t("commandLabel"));
  setElementText(".country-summary .metric-grid div:nth-child(2) dt", t("focusLabel"));
  setElementText(".country-summary .country-timeline h3", t("modernizationTimeline"));
  setElementText(".inventory-section .section-title-row h3", t("aircraftInventory"));

  setElementText(".ai-head .eyebrow", t("aiEyebrow"));
  setElementText("#aiTitle", t("aiTitle"));
  elements.countryCompareOpen.textContent = t("countryCompareButton");
  elements.mockAiOpen.textContent = t("aiCompareButton");
  elements.refreshBriefing.textContent = t("refreshAnalysis");
  setElementText(".ai-body .briefing-box:nth-child(1) h3", t("liveBriefing"));
  setElementText(".ai-body .briefing-box:nth-child(2) h3", t("questionSuggestions"));
  setElementText(".ai-body .briefing-box:nth-child(3) h3", t("countryAiSummaryTitle"));
  setElementText(".ai-body .briefing-box:nth-child(4) h3", t("signalReading"));

  elements.menuClose?.setAttribute("aria-label", t("menuCloseAria"));
  setElementText(".menu-head .eyebrow", t("menuEyebrow"));
  setElementText("#menuTitle", t("menuTitle"));
  setMenuOptionText("account", t("menuAccountTitle"), t("menuAccountSmall"));
  setMenuOptionText("settings", t("menuSettingsTitle"), t("menuSettingsSmall"));
  setMenuOptionText("compare", t("menuCompareTitle"), t("menuCompareSmall"));
  setMenuOptionText("mockAi", t("menuMockTitle"), t("menuMockSmall"));
  setMenuOptionText("countryCompare", t("menuCountryCompareTitle"), t("menuCountryCompareSmall"));
  setMenuOptionText("sources", t("menuSourcesTitle"), t("menuSourcesSmall"));
  setMenuOptionText("map", t("menuMapTitle"), t("menuMapSmall"));
  setElementText(".menu-favorites .menu-section-head .eyebrow", t("favorites"));
  setElementText(".menu-sources .menu-section-head .eyebrow", t("sources"));
  setElementText(".menu-sources .menu-section-head strong", t("sourceBackbone"));
  setElementText(".menu-system-card span", t("performanceMode"));
  setElementText(".menu-system-card strong", t("active"));
  localizeSourceLabels();

  elements.compareClose?.setAttribute("aria-label", t("compareCloseAria"));
  setElementText(".compare-head .eyebrow", t("compareEyebrow"));
  setElementText("#compareTitle", t("compareTitle"));
  if (!state.compareAircraftIds.length) elements.compareSummary.textContent = t("compareDefaultSummary");

  elements.mockAiClose?.setAttribute("aria-label", t("mockCloseAria"));
  setElementText(".mock-ai-head .eyebrow", t("mockEyebrow"));
  setElementText("#mockAiTitle", t("mockTitle"));
  setLabelTextForControl("mockAiCategory", t("category"));
  setLabelTextForControl("mockAiAircraftA", t("firstPlatform"));
  setLabelTextForControl("mockAiAircraftB", t("secondPlatform"));
  elements.mockAiRun.textContent = t("runAiAnalysis");
  elements.mockAiSwap.textContent = t("swapPlatforms");

  elements.countryCompareClose?.setAttribute("aria-label", t("countryCompareCloseAria"));
  setElementText(".country-compare-head .eyebrow", t("countryCompareEyebrow"));
  setElementText("#countryCompareTitle", t("countryCompareTitle"));
  setLabelTextForControl("countryCompareA", t("firstCountry"));
  setLabelTextForControl("countryCompareB", t("secondCountry"));
  elements.countryCompareRun.textContent = t("runCountryAnalysis");
  elements.countryCompareSwap.textContent = t("swapCountries");

  elements.countryIntelClose?.setAttribute("aria-label", t("countryIntelCloseAria"));
  setElementText(".country-intel-meta div:nth-child(1) dt", t("commandLabel"));
  setElementText(".country-intel-meta div:nth-child(2) dt", t("focusLabel"));
  setElementText(".country-intel-meta div:nth-child(3) dt", t("inventoryLabel"));
  setElementText(".country-radar-head .eyebrow", t("radarEyebrow"));
  setElementText("#countryRadarTitle", t("radarTitle"));
  setElementText(".country-source-trust-head .eyebrow", t("sourceTrustEyebrow"));
  setElementText("#countrySourceTrustTitle", t("sourceTrustTitle"));
  setElementText(".country-critical-alerts-head .eyebrow", t("alertEyebrow"));
  setElementText("#countryCriticalAlertsTitle", t("alertTitle"));
  setElementText(".country-intel-timeline h3", t("modernizationTimeline"));
  setElementText(".country-intel-inventory-head .eyebrow", t("combatPlatforms"));
  elements.countryIntelCompare.textContent = t("compareCountry");
  elements.countryIntelFilters?.setAttribute("aria-label", t("countryInventoryFiltersAria"));

  elements.inspectClose?.setAttribute("aria-label", t("inspectCloseAria"));
  elements.inspectAircraftImage?.setAttribute("alt", t("inspectImageAlt"));
  elements.inspectImageFallback.textContent = t("imageLoadFailed");
  document.querySelector(".inspect-nav")?.setAttribute("aria-label", t("inventoryNavAria"));
  elements.inspectPrev?.setAttribute("aria-label", t("prevAircraftAria"));
  elements.inspectNext?.setAttribute("aria-label", t("nextAircraftAria"));
  setElementText("#inspectAircraftTitle", t("aircraftNotSelected"));
  setElementText(".inspect-section:nth-of-type(1) h3", t("capabilityProfile"));
  setElementText("#inspectMunitionOpen small", t("loadoutProfile"));
  setTextNodeAfterElement("#inspectMunitionOpen span small", t("compatibleMunitions"));
  setElementText(".inspect-section:nth-of-type(2) h3", t("inventoryContext"));
  setElementText(".inspect-section:nth-of-type(3) h3", t("sourceVerification"));

  elements.munitionClose?.setAttribute("aria-label", t("munitionCloseAria"));
  elements.munitionFilters?.setAttribute("aria-label", t("munitionFiltersAria"));
  elements.munitionDetailImage?.setAttribute("alt", t("selectedMunitionAlt"));
  setElementText("#munitionDetailCategory", t("munitionDetailCard"));
  setElementText("#munitionDetailName", t("munitionNotSelected"));
  setElementText(".munition-detail-grid div:nth-child(1) dt", t("role"));
  setElementText(".munition-detail-grid div:nth-child(2) dt", t("guidance"));
  setElementText(".munition-detail-grid div:nth-child(3) dt", t("origin"));
  setElementText(".munition-detail-grid div:nth-child(4) dt", t("note"));
  setElementText(".munition-caveat", t("munitionCaveat"));

  elements.authClose?.setAttribute("aria-label", t("authCloseAria"));
  setElementText(".auth-panel-head .eyebrow", t("authEyebrow"));
  setElementText("#authTitle", t("authTitle"));
  elements.authTabs?.setAttribute("aria-label", t("authTabsAria"));
  setElementText('[data-auth-mode="login"]', t("login"));
  setElementText('[data-auth-mode="register"]', t("register"));
  setLabelTextForControl("loginEmail", t("email"));
  setLabelTextForControl("loginPassword", t("password"));
  document.querySelector("#loginForm .auth-submit").textContent = t("loginSubmit");
  elements.forgotPasswordOpen.textContent = t("forgotPassword");
  elements.forgotPasswordNote.textContent = t("forgotPasswordNote");
  setLabelTextForControl("forgotEmail", t("email"));
  setLabelTextForControl("forgotPassword", t("forgotNewPassword"));
  setLabelTextForControl("forgotPasswordConfirm", t("forgotNewPasswordRepeat"));
  document.querySelector("#forgotPasswordForm .auth-submit:not(.secondary)").textContent = t("updatePassword");
  elements.forgotBackLogin.textContent = t("backToLogin");
  setLabelTextForControl("registerName", t("username"));
  setLabelTextForControl("registerEmail", t("email"));
  setLabelTextForControl("registerPassword", t("password"));
  setLabelTextForControl("registerPasswordConfirm", t("passwordRepeat"));
  setLabelTextForControl("registerProfile", t("analysisProfile"));
  setProfileSelectOptions(elements.registerProfile);
  document.querySelector("#registerForm .auth-submit").textContent = t("createAccount");
  elements.authAccountTabs?.setAttribute("aria-label", t("accountTabsAria"));
  setElementText('[data-account-panel="profile"]', t("profile"));
  setElementText('[data-account-panel="settings"]', t("settings"));
  setElementText(".profile-card .eyebrow", t("activeSession"));
  setLabelTextForControl("profileName", t("username"));
  setLabelTextForControl("profileType", t("analysisProfile"));
  setProfileSelectOptions(elements.profileType);
  document.querySelector("#profileForm .auth-submit").textContent = t("saveProfile");
  document.querySelector(".account-grid")?.setAttribute("aria-label", t("sessionSummaryAria"));
  setAccountGridLabels();
  elements.authLogout.textContent = t("logout");
  setLabelTextForControl("settingsDefaultFilter", t("defaultAllianceFilter"));
  setAllianceSelectOptions(elements.settingsDefaultFilter);
  setLabelTextForControl("settingsInventoryDensity", t("inventoryDensity"));
  setInventoryDensityOptions();
  setLabelTextForControl("settingsRememberSelection", t("sessionStartup"));
  setRememberSelectionOptions();
  setToggleLabel("settingsReducedMotion", t("reduceMotion"));
  setToggleLabel("settingsHighContrast", t("highContrast"));
  document.querySelector("#settingsForm .auth-submit").textContent = t("saveSettings");
  setElementText(".auth-footnote", t("authFootnote"));

  setElementText(".source-footer span", t("footerSourceBackbone"));
  localizeFooterLinks();
}

function refreshLocalizedViews() {
  syncFilterButtons();
  renderAuthState();
  renderCompareState();
  renderSearchResults();
  const selectedCountry = countryById.get(state.selectedCountryId);
  if (selectedCountry) {
    renderCountrySummary(selectedCountry);
    renderAircraftList(selectedCountry);
    updateAiBriefing();
  }

  renderWorldMap();

  if (!elements.countryIntelPanel?.classList.contains("hidden") && selectedCountry) renderCountryIntelPanel(selectedCountry);
  if (!elements.mockAiPanel?.classList.contains("hidden")) {
    renderMockAiSelectors();
    renderMockAiAnalysis();
  }
  if (!elements.countryComparePanel?.classList.contains("hidden")) {
    renderCountryCompareSelectors();
    renderCountryCompareAnalysis();
  }
  if (!elements.comparePanel?.classList.contains("hidden")) renderComparePanel();
  if (!elements.aircraftInspect?.classList.contains("hidden")) {
    const selectedAircraft = aircraftById.get(state.selectedAircraftId);
    if (selectedAircraft && selectedCountry) openAircraftInspectPanel(selectedAircraft, selectedCountry);
  }
  if (!elements.munitionPanel?.classList.contains("hidden")) {
    renderMunitionPanel(aircraftById.get(state.selectedAircraftId), selectedCountry);
  }
  if (!elements.commandMenu?.classList.contains("hidden")) renderCommandMenuState();
}

function setElementText(selector, text) {
  const element = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (element) element.textContent = text;
}

function setTrailingText(selector, text) {
  const element = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!element) return;
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.textContent = text;
  } else {
    element.append(document.createTextNode(text));
  }
}

function setTextNodeAfterElement(selector, text) {
  const element = document.querySelector(selector);
  const parent = element?.parentElement;
  if (!element || !parent) return;
  const textNode = [...parent.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n              ${text}\n            `;
}

function setLabelTextForControl(controlId, text) {
  const control = document.getElementById(controlId);
  const label = control?.closest("label") || document.querySelector(`label[for="${controlId}"]`);
  if (!label) return;
  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = `\n            ${text}\n            `;
  } else {
    label.prepend(document.createTextNode(`${text} `));
  }
}

function setToggleLabel(controlId, text) {
  const control = document.getElementById(controlId);
  const label = control?.closest("label");
  const span = label?.querySelector("span");
  if (span) span.textContent = text;
}

function setMenuOptionText(action, title, detail) {
  const button = document.querySelector(`[data-menu-action="${action}"]`);
  if (!button) return;
  button.querySelector("strong").textContent = title;
  button.querySelector("small").textContent = detail;
}

function setProfileSelectOptions(selectElement) {
  if (!selectElement) return;
  const labels = {
    Tarafsız: t("neutralObserver"),
    NATO: t("natoFocused"),
    BRICS: t("bricsFocused"),
  };
  [...selectElement.options].forEach((option) => {
    option.textContent = labels[option.value] || option.textContent;
  });
}

function setAllianceSelectOptions(selectElement) {
  if (!selectElement) return;
  [...selectElement.options].forEach((option) => {
    if (option.value === "all") option.textContent = t("all");
  });
}

function setInventoryDensityOptions() {
  if (!elements.settingsInventoryDensity) return;
  [...elements.settingsInventoryDensity.options].forEach((option) => {
    option.textContent = option.value === "compact" ? t("compact") : t("standard");
  });
}

function setRememberSelectionOptions() {
  if (!elements.settingsRememberSelection) return;
  [...elements.settingsRememberSelection.options].forEach((option) => {
    option.textContent = option.value === "on" ? t("rememberLast") : t("defaultOpening");
  });
}

function setAccountGridLabels() {
  const labels = [t("registeredAt"), t("lastCountry"), t("lastAircraft"), t("defaultFilter")];
  document.querySelectorAll(".account-grid div span").forEach((span, index) => {
    span.textContent = labels[index] || span.textContent;
  });
}

function localizeSourceLabels() {
  const groups = document.querySelectorAll(".menu-sources .source-group");
  const groupTitles = [t("sourceAllianceHeading"), t("aircraftManufacturers"), t("airForcesData"), t("visualMap")];
  groups.forEach((group, index) => {
    group.querySelector("h4").textContent = groupTitles[index] || group.querySelector("h4").textContent;
  });

  const sourceLinks = [
    t("memberCountryList"),
    t("memberCountryList"),
    `Lockheed Martin ${t("platformInfo").toLowerCase()}`,
    `Dassault Aviation ${t("platformInfo").toLowerCase()}`,
    `Eurofighter ${t("platformInfo").toLowerCase()}`,
    `Saab ${t("platformInfo").toLowerCase()}`,
    t("aircraftFactSheets"),
    isEnglish() ? "TUSAŞ program page" : "TUSAŞ program sayfası",
    t("aircraftMunitionVisuals"),
    t("worldBoundaryData"),
  ];
  document.querySelectorAll(".menu-sources a").forEach((link, index) => {
    const textNode = [...link.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = `\n              ${sourceLinks[index] || textNode.textContent.trim()}\n            `;
  });
}

function localizeFooterLinks() {
  const footerLinks = document.querySelectorAll(".source-footer a");
  const labels = [
    `NATO ${t("memberCountryList").toLowerCase()}`,
    `BRICS ${t("memberCountryList").toLowerCase()}`,
    `USAF ${t("aircraftFactSheets").toLowerCase()}`,
    `Wikimedia Commons ${isEnglish() ? "images" : "görselleri"}`,
  ];
  footerLinks.forEach((link, index) => {
    link.textContent = labels[index] || link.textContent;
  });
}

function wireControls() {
  elements.languageSelect?.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });

  document.querySelectorAll(".seg-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setAllianceFilter(button.dataset.filter);
    });
  });

  elements.countrySearch.addEventListener("input", (event) => {
    state.search = normalize(event.target.value);
    renderSearchResults();
    updateMapSelection();
  });

  elements.refreshBriefing.addEventListener("click", () => updateAiBriefing(true));
  elements.zoomIn.addEventListener("click", () => zoomMapBy(1.35));
  elements.zoomOut.addEventListener("click", () => zoomMapBy(0.74));
  elements.zoomReset.addEventListener("click", resetMapZoom);
  elements.countryCompareOpen.addEventListener("click", () => openCountryComparePanel({ fromContext: true }));
  elements.mockAiOpen.addEventListener("click", () => openMockAiPanel({ fromContext: true }));
  elements.menuOpen.addEventListener("click", openCommandMenu);
  elements.menuClose.addEventListener("click", closeCommandMenu);
  elements.commandMenu.addEventListener("click", (event) => {
    if (event.target === elements.commandMenu) closeCommandMenu();
  });
  elements.commandMenu.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite-aircraft]");
    if (favoriteButton) {
      openFavoriteAircraft(favoriteButton.dataset.favoriteAircraft);
      return;
    }

    const button = event.target.closest("[data-menu-action]");
    if (button) handleMenuAction(button.dataset.menuAction);
  });
  elements.compareClose.addEventListener("click", closeComparePanel);
  elements.comparePanel.addEventListener("click", (event) => {
    if (event.target === elements.comparePanel) closeComparePanel();
  });
  elements.compareGrid.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-compare-remove]");
    if (removeButton) {
      toggleCompareAircraft(removeButton.dataset.compareRemove);
      return;
    }

    const openButton = event.target.closest("[data-compare-open]");
    if (openButton) openFavoriteAircraft(openButton.dataset.compareOpen, { closeCompare: true });
  });
  elements.mockAiClose.addEventListener("click", closeMockAiPanel);
  elements.mockAiPanel.addEventListener("click", (event) => {
    if (event.target === elements.mockAiPanel) closeMockAiPanel();
  });
  elements.mockAiCategory.addEventListener("change", (event) => {
    state.mockAiCategory = event.target.value;
    renderMockAiSelectors({ preserveSelection: false });
    renderMockAiAnalysis();
  });
  elements.mockAiAircraftA.addEventListener("change", (event) => {
    state.mockAiAircraftA = event.target.value;
    renderMockAiAnalysis();
  });
  elements.mockAiAircraftB.addEventListener("change", (event) => {
    state.mockAiAircraftB = event.target.value;
    renderMockAiAnalysis();
  });
  elements.mockAiRun.addEventListener("click", renderMockAiAnalysis);
  elements.mockAiSwap.addEventListener("click", () => {
    [state.mockAiAircraftA, state.mockAiAircraftB] = [state.mockAiAircraftB, state.mockAiAircraftA];
    renderMockAiSelectors();
    renderMockAiAnalysis();
  });
  elements.countryCompareClose.addEventListener("click", closeCountryComparePanel);
  elements.countryComparePanel.addEventListener("click", (event) => {
    if (event.target === elements.countryComparePanel) closeCountryComparePanel();
  });
  elements.countryCompareA.addEventListener("change", (event) => {
    state.countryCompareA = event.target.value;
    ensureDistinctCountryCompareSelection("A");
    renderCountryCompareSelectors();
    renderCountryCompareAnalysis();
  });
  elements.countryCompareB.addEventListener("change", (event) => {
    state.countryCompareB = event.target.value;
    ensureDistinctCountryCompareSelection("B");
    renderCountryCompareSelectors();
    renderCountryCompareAnalysis();
  });
  elements.countryCompareRun.addEventListener("click", renderCountryCompareAnalysis);
  elements.countryCompareSwap.addEventListener("click", () => {
    [state.countryCompareA, state.countryCompareB] = [state.countryCompareB, state.countryCompareA];
    renderCountryCompareSelectors();
    renderCountryCompareAnalysis();
  });
  elements.countryIntelClose.addEventListener("click", closeCountryIntelPanel);
  elements.countryIntelPanel.addEventListener("click", (event) => {
    if (event.target === elements.countryIntelPanel) closeCountryIntelPanel();
  });
  elements.countryIntelCompare.addEventListener("click", () => {
    closeCountryIntelPanel();
    openCountryComparePanel({ fromContext: true });
  });
  elements.countryIntelFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-country-inventory-filter]");
    if (!button) return;
    state.countryIntelFilter = button.dataset.countryInventoryFilter;
    renderCountryIntelAircraftList(countryById.get(state.selectedCountryId));
  });
  elements.authOpen.addEventListener("click", () => openAuthPanel(state.currentUser ? "profile" : "login"));
  elements.authClose.addEventListener("click", closeAuthPanel);
  elements.authModal.addEventListener("click", (event) => {
    if (event.target === elements.authModal) closeAuthPanel();
  });
  elements.inspectClose.addEventListener("click", closeAircraftInspectPanel);
  elements.inspectPrev.addEventListener("click", () => moveInspectSelection(-1));
  elements.inspectNext.addEventListener("click", () => moveInspectSelection(1));
  elements.inspectFavorite.addEventListener("click", () => toggleFavoriteAircraft(state.selectedAircraftId));
  elements.inspectCompare.addEventListener("click", () => toggleCompareAircraft(state.selectedAircraftId, { openWhenReady: true }));
  elements.inspectMunitionOpen.addEventListener("click", openMunitionPanel);
  elements.munitionClose.addEventListener("click", closeMunitionPanel);
  elements.aircraftInspect.addEventListener("click", (event) => {
    if (event.target === elements.aircraftInspect) closeAircraftInspectPanel();
  });
  elements.munitionPanel.addEventListener("click", (event) => {
    if (event.target === elements.munitionPanel) closeMunitionPanel();
  });
  elements.munitionCategories.addEventListener("click", (event) => {
    const button = event.target.closest("[data-munition-name]");
    if (!button) return;
    selectMunitionDetail(button.dataset.munitionName, button.dataset.munitionCategory);
  });
  elements.munitionFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-munition-filter]");
    if (!button) return;
    state.munitionFilter = button.dataset.munitionFilter;
    const selectedCountry = countryById.get(state.selectedCountryId);
    const selectedAircraft = aircraftById.get(state.selectedAircraftId);
    renderMunitionPanel(selectedAircraft, selectedCountry);
  });
  elements.aiQuestions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-ai-question]");
    if (!button) return;
    state.activeAiQuestion = button.dataset.aiQuestion;
    answerActiveAiQuestion();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!elements.commandMenu.classList.contains("hidden")) {
      closeCommandMenu();
      return;
    }
    if (!elements.comparePanel.classList.contains("hidden")) {
      closeComparePanel();
      return;
    }
    if (!elements.mockAiPanel.classList.contains("hidden")) {
      closeMockAiPanel();
      return;
    }
    if (!elements.countryComparePanel.classList.contains("hidden")) {
      closeCountryComparePanel();
      return;
    }
    if (!elements.munitionPanel.classList.contains("hidden")) {
      closeMunitionPanel();
      return;
    }
    if (!elements.authModal.classList.contains("hidden")) {
      closeAuthPanel();
      return;
    }
    if (!elements.aircraftInspect.classList.contains("hidden")) {
      closeAircraftInspectPanel();
      return;
    }
    if (!elements.countryIntelPanel.classList.contains("hidden")) closeCountryIntelPanel();
  });
  elements.authTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-auth-mode]");
    if (button) switchAuthMode(button.dataset.authMode);
  });
  elements.authAccountTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-account-panel]");
    if (button) switchAuthMode(button.dataset.accountPanel);
  });
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.forgotPasswordOpen.addEventListener("click", () => openForgotPasswordForm());
  elements.forgotBackLogin.addEventListener("click", () => switchAuthMode("login"));
  elements.forgotPasswordForm.addEventListener("submit", handleForgotPassword);
  elements.registerForm.addEventListener("submit", handleRegister);
  elements.profileForm.addEventListener("submit", handleProfileUpdate);
  elements.settingsForm.addEventListener("submit", handleSettingsUpdate);
  elements.authLogout.addEventListener("click", handleLogout);

  elements.inspectAircraftImage.addEventListener("load", () => {
    elements.inspectAircraftImage.hidden = false;
    elements.inspectImageFallback.classList.remove("visible");
  });

  elements.inspectAircraftImage.addEventListener("error", () => {
    handleImageError(elements.inspectAircraftImage, () => {
      elements.inspectAircraftImage.hidden = true;
      elements.inspectImageFallback.classList.add("visible");
    });
  });
}

function openCommandMenu() {
  renderCommandMenuState();
  elements.commandMenu.classList.remove("hidden");
  elements.commandMenu.setAttribute("aria-hidden", "false");
  elements.menuOpen.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  elements.menuClose.focus();
}

function closeCommandMenu() {
  elements.commandMenu.classList.add("hidden");
  elements.commandMenu.setAttribute("aria-hidden", "true");
  elements.menuOpen.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function handleMenuAction(action) {
  if (action === "account") {
    closeCommandMenu();
    openAuthPanel(state.currentUser ? "profile" : "login");
    return;
  }

  if (action === "settings") {
    closeCommandMenu();
    openAuthPanel(state.currentUser ? "settings" : "login");
    return;
  }

  if (action === "compare") {
    closeCommandMenu();
    openComparePanel();
    return;
  }

  if (action === "mockAi") {
    closeCommandMenu();
    openMockAiPanel({ fromContext: true });
    return;
  }

  if (action === "countryCompare") {
    closeCommandMenu();
    openCountryComparePanel({ fromContext: true });
    return;
  }

  if (action === "sources") {
    elements.menuSourcesPanel.scrollIntoView({ block: "nearest", behavior: getActiveSettings().reducedMotion ? "auto" : "smooth" });
    elements.menuSourcesPanel.focus({ preventScroll: true });
    return;
  }

  if (action === "map") {
    closeCommandMenu();
    document.querySelector(".map-console")?.scrollIntoView({ block: "start", behavior: getActiveSettings().reducedMotion ? "auto" : "smooth" });
    elements.countrySearch.focus({ preventScroll: true });
  }
}

function renderCommandMenuState() {
  const user = state.currentUser;
  if (!user) {
    elements.menuCallSign.textContent = "ANL";
    elements.menuAccountStatus.textContent = t("menuAccountWaiting");
    elements.menuAccountName.textContent = t("menuGuestUser");
    elements.menuAccountDetail.textContent = t("menuGuestDetail");
    elements.menuAccountHint.textContent = t("menuLoginHint");
  } else {
    const settings = normalizeUserSettings(user.settings, user.profile);
    const lastCountry = countryDisplayName(countryById.get(settings.lastCountryId)) || "-";
    const lastAircraft = aircraftById.get(settings.lastAircraftId)?.name || "-";
    elements.menuCallSign.textContent = makeCallSign(user.name);
    elements.menuAccountStatus.textContent = t("activeSession");
    elements.menuAccountName.textContent = user.name;
    elements.menuAccountDetail.textContent = `${formatProfileLabel(user.profile)} / ${lastCountry} / ${lastAircraft}`;
    elements.menuAccountHint.textContent = t("menuAccountSmall");
  }

  const favoriteIds = [...state.favoriteAircraftIds].filter((aircraftId) => aircraftById.has(aircraftId));
  elements.menuCompareHint.textContent = `${state.compareAircraftIds.length}/3 ${isEnglish() ? "platforms selected" : "platform seçili"}`;
  elements.menuFavoriteCount.textContent = platformCountText(favoriteIds.length);
  elements.menuFavoriteList.innerHTML = favoriteIds.length
    ? favoriteIds
        .map((aircraftId) => {
          const item = aircraftById.get(aircraftId);
          const hostCountry = findPrimaryCountryForAircraft(aircraftId);
          return `
            <button class="menu-favorite-button" type="button" data-favorite-aircraft="${escapeHtml(aircraftId)}">
              <span>${escapeHtml(hostCountry?.code || "---")}</span>
              <strong>${escapeHtml(item.name)}</strong>
              <small>${escapeHtml(hostCountry ? countryDisplayName(hostCountry) : aircraftOriginText(item))}</small>
            </button>
          `;
        })
        .join("")
    : `<p class="menu-empty">${escapeHtml(isEnglish() ? "No favorite platforms yet." : "Henüz favori platform yok.")}</p>`;
}

function readStoredAircraftIds(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed.filter((aircraftId) => typeof aircraftId === "string" && aircraftById.has(aircraftId)) : [];
  } catch {
    return [];
  }
}

function restoreAnalysisTools() {
  state.favoriteAircraftIds = new Set(readStoredAircraftIds(FAVORITE_AIRCRAFT_KEY));
  state.compareAircraftIds = readStoredAircraftIds(COMPARE_AIRCRAFT_KEY).slice(0, 3);
}

function persistAnalysisTools() {
  try {
    localStorage.setItem(FAVORITE_AIRCRAFT_KEY, JSON.stringify([...state.favoriteAircraftIds]));
    localStorage.setItem(COMPARE_AIRCRAFT_KEY, JSON.stringify(state.compareAircraftIds));
  } catch {
    // localStorage may be disabled in strict privacy modes.
  }
}

function renderCompareState() {
  state.compareAircraftIds = state.compareAircraftIds.filter((aircraftId) => aircraftById.has(aircraftId)).slice(0, 3);
  renderInspectActionState();
  renderCommandMenuState();
  if (!elements.comparePanel?.classList.contains("hidden")) renderComparePanel();
}

function toggleFavoriteAircraft(aircraftId) {
  if (!aircraftById.has(aircraftId)) return;

  if (state.favoriteAircraftIds.has(aircraftId)) {
    state.favoriteAircraftIds.delete(aircraftId);
  } else {
    state.favoriteAircraftIds.add(aircraftId);
  }

  persistAnalysisTools();
  renderAircraftList(countryById.get(state.selectedCountryId));
  if (elements.countryIntelPanel && !elements.countryIntelPanel.classList.contains("hidden")) {
    renderCountryIntelAircraftList(countryById.get(state.selectedCountryId));
  }
  renderCompareState();
}

function toggleCompareAircraft(aircraftId, options = {}) {
  if (!aircraftById.has(aircraftId)) return;

  const currentIndex = state.compareAircraftIds.indexOf(aircraftId);
  if (currentIndex >= 0) {
    state.compareAircraftIds.splice(currentIndex, 1);
  } else if (state.compareAircraftIds.length < 3) {
    state.compareAircraftIds.push(aircraftId);
  } else {
    openComparePanel();
    return;
  }

  persistAnalysisTools();
  renderAircraftList(countryById.get(state.selectedCountryId));
  if (elements.countryIntelPanel && !elements.countryIntelPanel.classList.contains("hidden")) {
    renderCountryIntelAircraftList(countryById.get(state.selectedCountryId));
  }
  renderCompareState();

  if (options.openWhenReady && state.compareAircraftIds.length >= 2 && currentIndex < 0) {
    openComparePanel();
  }
}

function renderInspectActionState() {
  if (!elements.inspectFavorite || !elements.inspectCompare) return;
  const aircraftId = state.selectedAircraftId;
  const isFavorite = state.favoriteAircraftIds.has(aircraftId);
  const isCompared = state.compareAircraftIds.includes(aircraftId);
  const compareFull = state.compareAircraftIds.length >= 3 && !isCompared;

  elements.inspectFavorite.textContent = isFavorite ? t("removeFavorite") : t("addFavorite");
  elements.inspectCompare.textContent = isCompared
    ? t("removeCompare")
    : compareFull
      ? isEnglish()
        ? "Compare Full"
        : "Karşılaştırma Dolu"
      : t("addCompare");
  elements.inspectFavorite.classList.toggle("active", isFavorite);
  elements.inspectCompare.classList.toggle("active", isCompared);
  elements.inspectCompare.classList.toggle("is-full", compareFull);
}

function openComparePanel() {
  renderComparePanel();
  elements.comparePanel.classList.remove("hidden");
  elements.comparePanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("compare-open");
  window.setTimeout(() => elements.compareClose.focus(), 80);
}

function closeComparePanel() {
  elements.comparePanel.classList.add("hidden");
  elements.comparePanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("compare-open");
}

function renderComparePanel() {
  const ids = state.compareAircraftIds.filter((aircraftId) => aircraftById.has(aircraftId));
  const count = ids.length;
  elements.compareSummary.textContent =
    count >= 2
      ? isEnglish()
        ? `${platformCountText(count)} reviewed side by side. Technical values are open-source summaries.`
        : `${count} platform yan yana inceleniyor. Teknik değerler açık kaynak özetidir.`
      : isEnglish()
        ? "Select at least two platforms to compare; up to three platforms are kept."
        : "Karşılaştırma için en az iki platform seç; en fazla üç platform tutulur.";

  if (!count) {
    elements.compareGrid.innerHTML = `
      <div class="compare-empty">
        <strong>${escapeHtml(isEnglish() ? "The comparison list is empty." : "Karşılaştırma listesi boş.")}</strong>
        <p>${escapeHtml(
          isEnglish()
            ? "Use the “Add to Compare” command from an aircraft detail panel."
            : "Bir uçağın detay panelinden “Karşılaştırmaya Ekle” komutunu kullan.",
        )}</p>
      </div>
    `;
    return;
  }

  elements.compareGrid.innerHTML = ids
    .map((aircraftId) => {
      const item = aircraftById.get(aircraftId);
      const hostCountry = findPrimaryCountryForAircraft(aircraftId);
      const hostProfile = getCountryAircraftProfile(hostCountry?.id, aircraftId, item);
      const profile = getMunitionProfile(aircraftId, item);
      const munitionCount = countMunitions(profile);
      const signals = calculateContextualAircraftSignals(item, hostProfile);
      return `
        <article class="compare-card">
          <div class="compare-card-top">
            <span>${escapeHtml(hostCountry?.alliance || aircraftOriginText(item))}</span>
            <button type="button" data-compare-remove="${escapeHtml(aircraftId)}" aria-label="${escapeHtml(
              isEnglish() ? `Remove ${hostProfile.displayName} from comparison` : `${hostProfile.displayName} karşılaştırmadan çıkar`,
            )}">×</button>
          </div>
          <h3>${escapeHtml(hostProfile.displayName)}</h3>
          <p>${escapeHtml(aircraftRoleText(item))}</p>
          <dl class="compare-spec-list">
            <div><dt>${escapeHtml(isEnglish() ? "Country" : "Ülke")}</dt><dd>${escapeHtml(hostCountry ? countryDisplayName(hostCountry) : "-")}</dd></div>
            <div><dt>${escapeHtml(isEnglish() ? "Data" : "Veri")}</dt><dd>${escapeHtml(hostProfile.confidenceLabel)}</dd></div>
            <div><dt>${escapeHtml(isEnglish() ? "Speed" : "Hız")}</dt><dd>${escapeHtml(item.speed)}</dd></div>
            <div><dt>${escapeHtml(isEnglish() ? "Range" : "Menzil")}</dt><dd>${escapeHtml(item.range)}</dd></div>
            <div><dt>${escapeHtml(isEnglish() ? "Ceiling" : "Tavan")}</dt><dd>${escapeHtml(item.ceiling)}</dd></div>
            <div><dt>${escapeHtml(isEnglish() ? "Munitions" : "Mühimmat")}</dt><dd>${escapeHtml(
              isEnglish() ? `${String(munitionCount).padStart(2, "0")} records` : `${String(munitionCount).padStart(2, "0")} kayıt`,
            )}</dd></div>
          </dl>
          <div class="compare-signal-stack">
            ${signals
              .slice(0, 4)
              .map(
                ([label, value]) => `
                  <div class="compare-signal">
                    <span>${escapeHtml(signalDisplayLabel(label))}</span>
                    <i><b style="width:${value}%"></b></i>
                    <strong>${value}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="compare-tags">
            <span class="confidence ${escapeHtml(hostProfile.confidenceClass)}">${escapeHtml(hostProfile.confidenceLabel)}</span>
            ${item.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(aircraftTagText(tag))}</span>`).join("")}
          </div>
          <button class="compare-open-aircraft" type="button" data-compare-open="${escapeHtml(aircraftId)}">${escapeHtml(
            isEnglish() ? "Open Detail" : "Detayı Aç",
          )}</button>
        </article>
      `;
    })
    .join("");
}

function openFavoriteAircraft(aircraftId, options = {}) {
  const item = aircraftById.get(aircraftId);
  const hostCountry = findPrimaryCountryForAircraft(aircraftId);
  if (!item || !hostCountry) return;

  if (!elements.commandMenu.classList.contains("hidden")) closeCommandMenu();
  if (options.closeCompare) closeComparePanel();
  selectCountry(hostCountry.id, aircraftId);
  openAircraftInspectPanel(item, hostCountry);
}

function findPrimaryCountryForAircraft(aircraftId) {
  const selectedCountry = countryById.get(state.selectedCountryId);
  if (selectedCountry?.aircraft.includes(aircraftId)) return selectedCountry;
  return countries.find((countryItem) => countryItem.aircraft.includes(aircraftId)) || null;
}

function makeAircraftContextKey(countryId, aircraftId) {
  return `${countryId}:${aircraftId}`;
}

function parseAircraftContextKey(value) {
  const [maybeCountryId, maybeAircraftId] = String(value || "").split(":");
  if (maybeAircraftId && countryById.has(maybeCountryId) && aircraftById.has(maybeAircraftId)) {
    return { countryId: maybeCountryId, aircraftId: maybeAircraftId };
  }

  const aircraftId = aircraftById.has(value) ? value : maybeAircraftId;
  const country = aircraftId ? findPrimaryCountryForAircraft(aircraftId) : null;
  return { countryId: country?.id || state.selectedCountryId, aircraftId };
}

function getAircraftContext(countryId, aircraftId) {
  const aircraftItem = aircraftById.get(aircraftId);
  if (!aircraftItem) return null;
  const countryItem = countryById.get(countryId) || findPrimaryCountryForAircraft(aircraftId);
  const profile = getCountryAircraftProfile(countryItem?.id, aircraftId, aircraftItem);
  return {
    key: makeAircraftContextKey(countryItem?.id || "xx", aircraftId),
    aircraftId,
    aircraft: aircraftItem,
    country: countryItem,
    profile,
  };
}

function getCountryAircraftProfile(countryId, aircraftId, aircraftItem) {
  const profile = countryAircraftProfiles[makeAircraftContextKey(countryId, aircraftId)] || {};
  const confidence = profile.confidence || inferAircraftConfidence(aircraftItem);
  const confidenceMeta = aircraftConfidenceLabels[confidence] || aircraftConfidenceLabels.open;
  const variant = profile.variant || aircraftItem.name;

  return {
    variant,
    displayName: variant,
    confidence,
    confidenceLabel: confidenceLabelText(confidence),
    confidenceClass: confidenceMeta.className,
    sourceTier: sourceTierText(profile.sourceTier || "Açık kaynak platform kataloğu"),
    sourceUrl: profile.sourceUrl || inferAircraftSourceUrl(aircraftItem),
    lastChecked: profile.lastChecked ? (isEnglish() ? dataLastCheckedText() : profile.lastChecked) : dataLastCheckedText(),
    modernization: modernizationText(profile.modernization || "Ülkeye özel blok/modernizasyon bilgisi genişletilmedi.", {
      confidence,
    }),
    note: profile.note || "Bu kart platform ailesi seviyesinde okunmalı; ülke, blok ve modernizasyon farkları ayrıca değişebilir.",
    signalAdjustments: profile.signalAdjustments || {},
  };
}

function inferAircraftSourceUrl(aircraftItem) {
  const text = normalize(`${aircraftItem?.name || ""} ${aircraftItem?.origin || ""}`);
  if (text.includes("f-35")) return "https://www.lockheedmartin.com/en-us/products/f-35.html";
  if (text.includes("f-16")) return "https://www.lockheedmartin.com/en-us/products/f-16.html";
  if (text.includes("f-15")) return "https://www.boeing.com/defense/f-15";
  if (text.includes("f/a-18") || text.includes("fa-18") || text.includes("ea-18")) return "https://www.boeing.com/defense/fa-18-super-hornet";
  if (text.includes("rafale")) return "https://www.dassault-aviation.com/en/defense/rafale/";
  if (text.includes("eurofighter") || text.includes("typhoon")) return "https://www.eurofighter.com/";
  if (text.includes("gripen")) return "https://www.saab.com/products/gripen";
  if (text.includes("kaan")) return "https://www.tusas.com/en/products/new-projects/original-development/kaan";
  return "";
}

function inferAircraftConfidence(aircraftItem) {
  const text = normalize(`${aircraftItem?.name || ""} ${aircraftItem?.role || ""} ${aircraftItem?.note || ""} ${(aircraftItem?.tags || []).join(" ")}`);
  if (hasAnyTerm(text, ["gelecek", "program", "prototip", "hedef", "tedarik"])) return "conditional";
  if (hasAnyTerm(text, ["tarihsel", "klasik", "yasli", "gecis"])) return "legacy";
  return "open";
}

function calculateContextualAircraftSignals(aircraftItem, profile = null) {
  const adjustments = profile?.signalAdjustments || {};
  return calculateAircraftSignals(aircraftItem).map(([label, value]) => [
    label,
    Math.max(4, Math.min(99, value + (adjustments[label] || 0))),
  ]);
}

function openMockAiPanel(options = {}) {
  if (!elements.commandMenu.classList.contains("hidden")) closeCommandMenu();
  if (!elements.comparePanel.classList.contains("hidden")) closeComparePanel();
  if (options.fromContext) primeMockAiSelectionFromContext();

  renderMockAiSelectors();
  renderMockAiAnalysis();
  elements.mockAiPanel.classList.remove("hidden");
  elements.mockAiPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("mock-ai-open");
  window.setTimeout(() => elements.mockAiCategory.focus(), 80);
}

function closeMockAiPanel() {
  elements.mockAiPanel.classList.add("hidden");
  elements.mockAiPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("mock-ai-open");
}

function primeMockAiSelectionFromContext() {
  if (!aircraftById.has(state.selectedAircraftId)) return;

  const entries = getMockAiAircraftEntries(state.mockAiCategory);
  const selectedKey = makeAircraftContextKey(state.selectedCountryId, state.selectedAircraftId);
  if (entries.some((entry) => entry.key === selectedKey)) {
    state.mockAiAircraftA = selectedKey;
  }

  const selectedCountry = countryById.get(state.selectedCountryId);
  const selectedContext = getMockAiSelection(state.mockAiAircraftA);
  const entryKeys = new Set(entries.map((entry) => entry.key));
  const comparable =
    selectedCountry && selectedContext?.aircraft
      ? findComparableOppositePlatforms(selectedCountry, selectedContext.aircraft).find((entry) => {
          const entryKey = makeAircraftContextKey(entry.countryItem.id, entry.aircraftId);
          return entryKeys.has(entryKey) && entryKey !== state.mockAiAircraftA;
        })
      : null;
  state.mockAiAircraftB =
    (comparable ? makeAircraftContextKey(comparable.countryItem.id, comparable.aircraftId) : "") ||
    entries.find((entry) => entry.key !== state.mockAiAircraftA)?.key ||
    state.mockAiAircraftB;
}

function renderMockAiSelectors(options = {}) {
  const category = getMockAiCategory();
  const entries = getMockAiAircraftEntries(category.id);
  elements.mockAiCategory.innerHTML = mockAiCategories
    .map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(optionLabel(item))}</option>`)
    .join("");
  elements.mockAiCategory.value = category.id;

  if (!entries.length) {
    elements.mockAiAircraftA.innerHTML = `<option>${escapeHtml(t("noPlatforms"))}</option>`;
    elements.mockAiAircraftB.innerHTML = `<option>${escapeHtml(t("noPlatforms"))}</option>`;
    return;
  }

  if (options.preserveSelection === false || !entries.some((entry) => entry.key === state.mockAiAircraftA)) {
    state.mockAiAircraftA = entries[0].key;
  }

  if (
    options.preserveSelection === false ||
    !entries.some((entry) => entry.key === state.mockAiAircraftB) ||
    state.mockAiAircraftB === state.mockAiAircraftA
  ) {
    state.mockAiAircraftB = entries.find((entry) => entry.key !== state.mockAiAircraftA)?.key || entries[0].key;
  }

  const optionsHtml = entries.map((entry) => renderMockAiAircraftOption(entry)).join("");
  elements.mockAiAircraftA.innerHTML = optionsHtml;
  elements.mockAiAircraftB.innerHTML = optionsHtml;
  elements.mockAiAircraftA.value = state.mockAiAircraftA;
  elements.mockAiAircraftB.value = state.mockAiAircraftB;
}

function renderMockAiAircraftOption(entry) {
  const category = getMockAiCategory();
  const scoreSuffix = category.signal ? ` / ${entry.focusScore}` : "";
  return `<option value="${escapeHtml(entry.key)}">${escapeHtml(entry.profile.displayName)} - ${escapeHtml(
    entry.country?.code || "---",
  )} ${escapeHtml(entry.country?.alliance || "")}${scoreSuffix}</option>`;
}

function renderMockAiAnalysis() {
  const category = getMockAiCategory();
  const contextA = getMockAiSelection(state.mockAiAircraftA);
  const contextB = getMockAiSelection(state.mockAiAircraftB);
  const aircraftA = contextA?.aircraft;
  const aircraftB = contextB?.aircraft;

  if (!aircraftA || !aircraftB) {
    elements.mockAiVerdict.innerHTML = `<p>${escapeHtml(isEnglish() ? "Select two platforms for analysis." : "Analiz için iki platform seç.")}</p>`;
    elements.mockAiScoreGrid.innerHTML = "";
    elements.mockAiAdvantageGrid.innerHTML = "";
    elements.mockAiBars.innerHTML = "";
    return;
  }

  const signalsA = calculateContextualAircraftSignals(aircraftA, contextA.profile);
  const signalsB = calculateContextualAircraftSignals(aircraftB, contextB.profile);
  const scoreA = getMockAiFocusedScore(signalsA, category);
  const scoreB = getMockAiFocusedScore(signalsB, category);
  const delta = scoreA - scoreB;
  const leader = Math.abs(delta) < 6 ? null : delta > 0 ? contextA : contextB;
  const leaderScore = delta > 0 ? scoreA : scoreB;
  const trailingScore = delta > 0 ? scoreB : scoreA;
  const categoryLabel = category.signal ? signalDisplayLabel(category.signal) : isEnglish() ? "General profile" : "Genel profil";
  const focusText = leader
    ? isEnglish()
      ? `${leader.profile.displayName} leads by +${Math.abs(leaderScore - trailingScore)} points in ${categoryLabel}.`
      : `${leader.profile.displayName}, ${categoryLabel} odağında +${Math.abs(leaderScore - trailingScore)} puan önde.`
    : isEnglish()
      ? `${contextA.profile.displayName} and ${contextB.profile.displayName} look balanced in ${categoryLabel}.`
      : `${contextA.profile.displayName} ve ${contextB.profile.displayName}, ${categoryLabel} odağında dengeli görünüyor.`;

  elements.mockAiSummary.textContent = `${optionLabel(category)} / ${contextA.profile.displayName} ↔ ${contextB.profile.displayName}`;
  elements.mockAiVerdict.innerHTML = `
    <p class="eyebrow">${escapeHtml(isEnglish() ? "AI result" : "AI sonucu")}</p>
    <h3>${escapeHtml(leader ? (isEnglish() ? `${leader.profile.displayName} leads` : `${leader.profile.displayName} öne çıkıyor`) : isEnglish() ? "Balanced pairing" : "Dengeli eşleşme")}</h3>
    <p>${escapeHtml(focusText)} ${escapeHtml(buildMockAiNarrative(contextA, contextB, signalsA, signalsB, category))}</p>
    <small class="ai-source-note">${escapeHtml(
      isEnglish()
        ? `Analysis note: results are prepared from capability scores, country-specific variant tags and open-source confidence level. Last checked: ${dataLastCheckedText()}.`
        : `Analiz notu: sonuçlar kabiliyet skorları, ülkeye özel varyant etiketi ve açık kaynak güven seviyesi üzerinden hazırlanmıştır. Son kontrol: ${DATA_LAST_CHECKED}.`,
    )}</small>
  `;

  elements.mockAiScoreGrid.innerHTML = [
    renderMockAiScoreCard(contextA, scoreA, signalsA, isEnglish() ? "1st platform" : "1. platform"),
    renderMockAiScoreCard(contextB, scoreB, signalsB, isEnglish() ? "2nd platform" : "2. platform"),
  ].join("");

  elements.mockAiAdvantageGrid.innerHTML = renderMockAiAdvantageCards(contextA, contextB, signalsA, signalsB);

  elements.mockAiBars.innerHTML = signalsA
    .map(([label, valueA]) => {
      const valueB = getSignalValue(signalsB, label);
      const rowDelta = valueA - valueB;
      return `
        <div class="mock-ai-bar-row">
          <span>${escapeHtml(signalDisplayLabel(label))}</span>
          <div class="mock-ai-dual-bars">
            <i><b style="width:${valueA}%"></b></i>
            <i><b style="width:${valueB}%"></b></i>
          </div>
          <strong>${rowDelta === 0 ? "0" : rowDelta > 0 ? `+${rowDelta}` : rowDelta}</strong>
        </div>
      `;
    })
    .join("");
}

function renderMockAiScoreCard(context, score, signals, label) {
  const strongest = [...signals].sort((a, b) => b[1] - a[1])[0];
  return `
    <article class="mock-ai-score-card">
      <p class="eyebrow">${escapeHtml(label)}</p>
      <h3>${escapeHtml(context.profile.displayName)}</h3>
      <span>${escapeHtml(context.country ? countryDisplayName(context.country) : aircraftOriginText(context.aircraft))} / ${escapeHtml(
        context.country?.alliance || (isEnglish() ? "Open source" : "Açık kaynak"),
      )}</span>
      <strong>${score}</strong>
      <small class="confidence ${escapeHtml(context.profile.confidenceClass)}">${escapeHtml(context.profile.confidenceLabel)}</small>
      <small>${escapeHtml(t("strongestArea"))}: ${escapeHtml(signalDisplayLabel(strongest?.[0] || "-"))} ${escapeHtml(strongest?.[1] || "-")}</small>
    </article>
  `;
}

function buildMockAiNarrative(contextA, contextB, signalsA, signalsB, category) {
  const scoreLines = signalsA
    .map(([label, valueA]) => [label, valueA - getSignalValue(signalsB, label)])
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  const strongestGap = scoreLines[0];
  const secondGap = scoreLines[1];

  if (!strongestGap || Math.abs(strongestGap[1]) < 6) {
    return isEnglish()
      ? "Profile difference is low; selection should be read through mission context, integration and modernization package."
      : "Profil farkı düşük; seçim daha çok görev bağlamı, entegrasyon ve modernizasyon paketine bağlı okunmalı.";
  }

  const firstLeader = strongestGap[1] > 0 ? contextA.profile.displayName : contextB.profile.displayName;
  const secondLeader = secondGap?.[1] > 0 ? contextA.profile.displayName : contextB.profile.displayName;
  const categoryNote = category.signal
    ? isEnglish()
      ? `${optionLabel(category)} narrows the list to platforms that look strong in this area.`
      : `${optionLabel(category)} filtresi, listeyi bu alanda güçlü görünen platformlara daralttı.`
    : isEnglish()
      ? "General profile uses the average of all capability headings."
      : "Genel profil, tüm kabiliyet başlıklarının ortalamasını kullanıyor.";
  return isEnglish()
    ? `${categoryNote} The clearest gap is in ${signalDisplayLabel(strongestGap[0])} for ${firstLeader}. The second separation appears in ${
        signalDisplayLabel(secondGap?.[0] || "Modernlik")
      } for ${secondLeader}. Data confidence: ${contextA.profile.confidenceLabel} / ${contextB.profile.confidenceLabel}.`
    : `${categoryNote} En belirgin fark ${strongestGap[0]} alanında ${firstLeader} lehine. İkinci ayrışma ${secondGap?.[0] || "Modernlik"} alanında ${secondLeader} tarafında görünüyor. Veri güveni: ${contextA.profile.confidenceLabel} / ${contextB.profile.confidenceLabel}.`;
}

function renderMockAiAdvantageCards(contextA, contextB, signalsA, signalsB) {
  return signalsA
    .map(([label, valueA]) => {
      const valueB = getSignalValue(signalsB, label);
      const delta = valueA - valueB;
      const winner = Math.abs(delta) < 5 ? null : delta > 0 ? contextA : contextB;
      const stateText = winner ? `${winner.profile.displayName} +${Math.abs(delta)}` : isEnglish() ? "Balanced" : "Dengeli";
      return `
        <article class="mock-ai-advantage-card">
          <span>${escapeHtml(signalDisplayLabel(label))}</span>
          <strong>${escapeHtml(stateText)}</strong>
          <small>${escapeHtml(buildAdvantageReason(label, delta, contextA, contextB))}</small>
        </article>
      `;
    })
    .join("");
}

function buildAdvantageReason(label, delta, contextA, contextB) {
  if (Math.abs(delta) < 5) {
    return isEnglish()
      ? "Score gap is low; mission context and integration become decisive."
      : "Skor farkı düşük; görev bağlamı ve entegrasyon belirleyici olur.";
  }
  const winner = delta > 0 ? contextA : contextB;
  const confidence = winner.profile.confidenceLabel;
  return isEnglish()
    ? `Higher capability score in ${signalDisplayLabel(label)} profile. Confidence tag: ${confidence}.`
    : `${label} profilinde daha yüksek kabiliyet skoru. Güven etiketi: ${confidence}.`;
}

function getMockAiCategory() {
  return mockAiCategories.find((category) => category.id === state.mockAiCategory) || mockAiCategories[0];
}

function getMockAiAircraftEntries(categoryId) {
  const category = mockAiCategories.find((item) => item.id === categoryId) || mockAiCategories[0];
  const entries = countries
    .flatMap((countryItem) =>
      countryItem.aircraft
        .map((aircraftId) => getAircraftContext(countryItem.id, aircraftId))
        .filter(Boolean)
        .map((context) => {
          const signals = calculateContextualAircraftSignals(context.aircraft, context.profile);
          return {
            ...context,
            focusScore: getMockAiFocusedScore(signals, category),
          };
        }),
    )
    .filter((entry) => !category.signal || entry.focusScore >= category.threshold);

  return entries.sort((a, b) => {
    if (b.focusScore !== a.focusScore) return b.focusScore - a.focusScore;
    return a.aircraft.name.localeCompare(b.aircraft.name, currentLocale());
  });
}

function getMockAiFocusedScore(signals, category) {
  if (category.signal) return getSignalValue(signals, category.signal);
  return Math.round(signals.reduce((total, [, value]) => total + value, 0) / Math.max(1, signals.length));
}

function getMockAiSelection(value) {
  const { countryId, aircraftId } = parseAircraftContextKey(value);
  return getAircraftContext(countryId, aircraftId);
}

function getSignalValue(signals, label) {
  return signals.find(([signalLabel]) => signalLabel === label)?.[1] || 0;
}

function openAuthPanel(mode = "login") {
  if (!elements.commandMenu.classList.contains("hidden")) closeCommandMenu();
  elements.authModal.classList.remove("hidden");
  elements.authModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("auth-open");
  switchAuthMode(mode);

  const focusTarget = state.currentUser
    ? mode === "settings"
      ? elements.settingsDefaultFilter
      : elements.profileName
    : mode === "forgot"
      ? elements.forgotEmail
    : mode === "register"
      ? elements.registerName
      : elements.loginEmail;
  window.setTimeout(() => focusTarget?.focus(), 40);
}

function closeAuthPanel() {
  elements.authModal.classList.add("hidden");
  elements.authModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("auth-open");
  setAuthMessage("");
}

function switchAuthMode(mode) {
  if (state.currentUser) {
    const accountMode = mode === "settings" ? "settings" : "profile";
    state.accountPanel = accountMode;

    elements.authTabs.classList.add("hidden");
    elements.loginForm.classList.add("hidden");
    elements.forgotPasswordForm.classList.add("hidden");
    elements.registerForm.classList.add("hidden");
    elements.authAccountTabs.classList.remove("hidden");
    elements.authProfile.classList.toggle("hidden", accountMode !== "profile");
    elements.settingsForm.classList.toggle("hidden", accountMode !== "settings");

    elements.authAccountTabs.querySelectorAll("[data-account-panel]").forEach((button) => {
      button.classList.toggle("active", button.dataset.accountPanel === accountMode);
    });

    renderAuthState();
    setAuthMessage("");
    return;
  }

  const authMode = mode === "register" ? "register" : mode === "forgot" ? "forgot" : "login";

  elements.authTabs.classList.remove("hidden");
  elements.authAccountTabs.classList.add("hidden");
  elements.authProfile.classList.add("hidden");
  elements.settingsForm.classList.add("hidden");
  elements.loginForm.classList.toggle("hidden", authMode !== "login");
  elements.forgotPasswordForm.classList.toggle("hidden", authMode !== "forgot");
  elements.registerForm.classList.toggle("hidden", authMode !== "register");

  elements.authTabs.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === (authMode === "forgot" ? "login" : authMode));
  });

  setAuthMessage("");
}

function openForgotPasswordForm() {
  const rememberedEmail = elements.loginEmail.value.trim();
  elements.forgotPasswordForm.reset();
  elements.forgotEmail.value = rememberedEmail;
  switchAuthMode("forgot");

  const focusTarget = rememberedEmail ? elements.forgotPassword : elements.forgotEmail;
  window.setTimeout(() => focusTarget?.focus(), 40);
}

async function handleRegister(event) {
  event.preventDefault();

  const name = elements.registerName.value.trim().replace(/\s+/g, " ");
  const email = normalizeEmail(elements.registerEmail.value);
  const password = elements.registerPassword.value;
  const passwordConfirm = elements.registerPasswordConfirm.value;
  const profile = elements.registerProfile.value;

  if (name.length < 2) {
    setAuthMessage("Kullanıcı adı en az 2 karakter olmalı.", "error");
    return;
  }

  if (!email.includes("@")) {
    setAuthMessage("Geçerli bir e-posta adresi gir.", "error");
    return;
  }

  if (password.length < 8) {
    setAuthMessage("Şifre en az 8 karakter olmalı.", "error");
    return;
  }

  if (password !== passwordConfirm) {
    setAuthMessage("Şifreler eşleşmiyor.", "error");
    return;
  }

  const users = loadAuthUsers();
  if (users.some((user) => user.email === email)) {
    setAuthMessage("Bu e-posta ile kayıtlı bir kullanıcı var.", "error");
    return;
  }

  const salt = createSalt();
  const user = {
    id: createUserId(),
    name,
    email,
    profile,
    settings: createUserSettings(profile),
    salt,
    passwordHash: await hashPassword(password, salt),
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  saveAuthUsers(users);
  setActiveUser(user);
  elements.registerForm.reset();
  switchAuthMode("profile");
  setAuthMessage("Hesap oluşturuldu. Oturum açıldı.", "success");
}

async function handleLogin(event) {
  event.preventDefault();

  const email = normalizeEmail(elements.loginEmail.value);
  const password = elements.loginPassword.value;
  const user = loadAuthUsers().find((item) => item.email === email);

  if (!user) {
    setAuthMessage("Bu e-posta ile kayıtlı kullanıcı bulunamadı.", "error");
    return;
  }

  const passwordHash = await hashPassword(password, user.salt);
  if (passwordHash !== user.passwordHash) {
    setAuthMessage("Şifre hatalı.", "error");
    return;
  }

  setActiveUser(user);
  elements.loginForm.reset();
  switchAuthMode("profile");
  setAuthMessage("Oturum açıldı.", "success");
}

async function handleForgotPassword(event) {
  event.preventDefault();

  const email = normalizeEmail(elements.forgotEmail.value);
  const password = elements.forgotPassword.value;
  const passwordConfirm = elements.forgotPasswordConfirm.value;

  if (!email.includes("@")) {
    setAuthMessage(isEnglish() ? "Enter a valid email address." : "Geçerli bir e-posta adresi gir.", "error");
    return;
  }

  if (password.length < 8) {
    setAuthMessage(isEnglish() ? "Password must be at least 8 characters." : "Şifre en az 8 karakter olmalı.", "error");
    return;
  }

  if (password !== passwordConfirm) {
    setAuthMessage(isEnglish() ? "Passwords do not match." : "Şifreler eşleşmiyor.", "error");
    return;
  }

  const users = loadAuthUsers();
  const userIndex = users.findIndex((user) => normalizeEmail(user.email) === email);

  if (userIndex === -1) {
    setAuthMessage(isEnglish() ? "No user is registered with this email." : "Bu e-posta ile kayıtlı kullanıcı bulunamadı.", "error");
    return;
  }

  const salt = createSalt();
  users[userIndex] = normalizeStoredUser({
    ...users[userIndex],
    salt,
    passwordHash: await hashPassword(password, salt),
    updatedAt: new Date().toISOString(),
  });
  saveAuthUsers(users);

  elements.loginEmail.value = email;
  elements.loginPassword.value = "";
  elements.forgotPasswordForm.reset();
  switchAuthMode("login");
  setAuthMessage(
    isEnglish()
      ? "Password updated. You can log in with your new password."
      : "Şifre güncellendi. Yeni şifrenle giriş yapabilirsin.",
    "success",
  );
}

function handleLogout() {
  state.currentUser = null;
  try {
    localStorage.removeItem(AUTH_SESSION_KEY);
  } catch (error) {
    console.warn("Oturum temizlenemedi", error);
  }
  renderAuthState();
  switchAuthMode("login");
  applyUserSettings({ render: true });
  setAuthMessage("Oturum kapatıldı.", "success");
  updateAiBriefing();
}

function setActiveUser(user) {
  const normalizedUser = normalizeStoredUser(user);
  state.currentUser = publicUser(normalizedUser);
  try {
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ userId: normalizedUser.id, startedAt: new Date().toISOString() }));
  } catch (error) {
    console.warn("Oturum kaydedilemedi", error);
  }
  applyUserSettings();
  selectCountry(state.selectedCountryId, state.selectedAircraftId);
  renderAuthState();
  updateAiBriefing();
}

function restoreAuthSession() {
  try {
    const session = JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || "null");
    const user = loadAuthUsers().find((item) => item.id === session?.userId);
    state.currentUser = user ? publicUser(normalizeStoredUser(user)) : null;
  } catch (error) {
    state.currentUser = null;
    console.warn("Oturum okunamadı", error);
  }
}

function renderAuthState() {
  const user = state.currentUser;
  elements.authOpen.classList.toggle("signed-in", Boolean(user));
  elements.authTriggerText.textContent = user ? user.name : t("authGuest");
  renderCommandMenuState();

  if (!user) {
    elements.authCallSign.textContent = "ANL";
    elements.authUserName.textContent = isEnglish() ? "User" : "Kullanıcı";
    elements.authUserEmail.textContent = "";
    elements.authUserProfile.textContent = "";
    elements.profileName.value = "";
    elements.profileType.value = "Tarafsız";
    elements.authCreatedAt.textContent = "-";
    elements.authLastCountry.textContent = "-";
    elements.authLastAircraft.textContent = "-";
    elements.authDefaultFilter.textContent = formatFilterLabel("all");
    return;
  }

  const settings = normalizeUserSettings(user.settings, user.profile);
  const lastCountry = countryById.get(settings.lastCountryId) || countryById.get(state.selectedCountryId);
  const lastAircraft = aircraftById.get(settings.lastAircraftId) || aircraftById.get(state.selectedAircraftId);

  elements.authCallSign.textContent = makeCallSign(user.name);
  elements.authUserName.textContent = user.name;
  elements.authUserEmail.textContent = user.email;
  elements.authUserProfile.textContent = isEnglish() ? `${formatProfileLabel(user.profile)} analysis profile` : `${user.profile} analiz profili`;
  elements.profileName.value = user.name;
  elements.profileType.value = user.profile;
  elements.authCreatedAt.textContent = formatDate(user.createdAt);
  elements.authLastCountry.textContent = countryDisplayName(lastCountry) || "-";
  elements.authLastAircraft.textContent = lastAircraft?.name || "-";
  elements.authDefaultFilter.textContent = formatFilterLabel(settings.defaultFilter);
  elements.settingsDefaultFilter.value = settings.defaultFilter;
  elements.settingsInventoryDensity.value = settings.inventoryDensity;
  elements.settingsRememberSelection.value = settings.rememberSelection ? "on" : "off";
  elements.settingsReducedMotion.checked = settings.reducedMotion;
  elements.settingsHighContrast.checked = settings.highContrast;
}

function loadAuthUsers() {
  try {
    const parsed = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizeStoredUser) : [];
  } catch (error) {
    console.warn("Kullanıcı listesi okunamadı", error);
    return [];
  }
}

function saveAuthUsers(users) {
  try {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.warn("Kullanıcı listesi kaydedilemedi", error);
    setAuthMessage("Tarayıcı depolaması kapalı görünüyor.", "error");
  }
}

function normalizeStoredUser(user) {
  const profile = ["NATO", "BRICS", "Tarafsız"].includes(user?.profile) ? user.profile : "Tarafsız";
  return {
    ...user,
    name: String(user?.name || "Kullanıcı").trim() || "Kullanıcı",
    email: normalizeEmail(user?.email || ""),
    profile,
    settings: normalizeUserSettings(user?.settings, profile),
    createdAt: user?.createdAt || new Date().toISOString(),
  };
}

function createUserSettings(profile) {
  const defaultFilter = profile === "NATO" || profile === "BRICS" ? profile : "all";
  return {
    ...DEFAULT_USER_SETTINGS,
    defaultFilter,
    lastCountryId: state.selectedCountryId,
    lastAircraftId: state.selectedAircraftId,
  };
}

function normalizeUserSettings(settings = {}, profile = "Tarafsız") {
  const fallbackFilter = profile === "NATO" || profile === "BRICS" ? profile : DEFAULT_USER_SETTINGS.defaultFilter;
  const defaultFilter = ["all", "NATO", "BRICS"].includes(settings.defaultFilter)
    ? settings.defaultFilter
    : fallbackFilter;
  const inventoryDensity = settings.inventoryDensity === "compact" ? "compact" : "comfortable";
  const lastCountryId = countryById.has(settings.lastCountryId) ? settings.lastCountryId : DEFAULT_USER_SETTINGS.lastCountryId;
  const selectedCountry = countryById.get(lastCountryId);
  const lastAircraftId =
    selectedCountry?.aircraft.includes(settings.lastAircraftId) && aircraftById.has(settings.lastAircraftId)
      ? settings.lastAircraftId
      : selectedCountry?.aircraft[0] || DEFAULT_USER_SETTINGS.lastAircraftId;

  return {
    ...DEFAULT_USER_SETTINGS,
    defaultFilter,
    inventoryDensity,
    rememberSelection: settings.rememberSelection !== false,
    reducedMotion: Boolean(settings.reducedMotion),
    highContrast: Boolean(settings.highContrast),
    lastCountryId,
    lastAircraftId,
  };
}

function updateCurrentUser(updater, options = {}) {
  if (!state.currentUser) return null;

  const users = loadAuthUsers();
  const userIndex = users.findIndex((user) => user.id === state.currentUser.id);
  if (userIndex === -1) return null;

  const updatedUser = normalizeStoredUser(updater(normalizeStoredUser(users[userIndex])));
  users[userIndex] = updatedUser;
  saveAuthUsers(users);
  state.currentUser = publicUser(updatedUser);

  if (options.applySettings) applyUserSettings({ render: true });
  if (options.render !== false) renderAuthState();
  if (options.briefing !== false) updateAiBriefing();
  return updatedUser;
}

function handleProfileUpdate(event) {
  event.preventDefault();

  const name = elements.profileName.value.trim().replace(/\s+/g, " ");
  const profile = elements.profileType.value;

  if (name.length < 2) {
    setAuthMessage("Kullanıcı adı en az 2 karakter olmalı.", "error");
    return;
  }

  updateCurrentUser((user) => ({
    ...user,
    name,
    profile,
    updatedAt: new Date().toISOString(),
  }));
  setAuthMessage("Profil güncellendi.", "success");
}

function handleSettingsUpdate(event) {
  event.preventDefault();

  const currentSettings = normalizeUserSettings(state.currentUser?.settings, state.currentUser?.profile);
  const updatedSettings = {
    ...currentSettings,
    defaultFilter: elements.settingsDefaultFilter.value,
    inventoryDensity: elements.settingsInventoryDensity.value,
    rememberSelection: elements.settingsRememberSelection.value === "on",
    reducedMotion: elements.settingsReducedMotion.checked,
    highContrast: elements.settingsHighContrast.checked,
    lastCountryId: state.selectedCountryId,
    lastAircraftId: state.selectedAircraftId,
  };

  updateCurrentUser(
    (user) => ({
      ...user,
      settings: normalizeUserSettings(updatedSettings, user.profile),
      updatedAt: new Date().toISOString(),
    }),
    { applySettings: true, briefing: false },
  );
  setAuthMessage("Ayarlar kaydedildi.", "success");
}

function getActiveSettings() {
  return state.currentUser ? normalizeUserSettings(state.currentUser.settings, state.currentUser.profile) : DEFAULT_USER_SETTINGS;
}

function applyUserSettings(options = {}) {
  const settings = getActiveSettings();
  document.body.classList.toggle("ui-density-compact", settings.inventoryDensity === "compact" && Boolean(state.currentUser));
  document.body.classList.toggle("ui-reduced-motion", settings.reducedMotion && Boolean(state.currentUser));
  document.body.classList.toggle("ui-high-contrast", settings.highContrast && Boolean(state.currentUser));

  if (state.currentUser && settings.rememberSelection && countryById.has(settings.lastCountryId)) {
    const selectedCountry = countryById.get(settings.lastCountryId);
    state.selectedCountryId = settings.lastCountryId;
    state.selectedAircraftId = selectedCountry.aircraft.includes(settings.lastAircraftId)
      ? settings.lastAircraftId
      : selectedCountry.aircraft[0] || null;
  }

  setAllianceFilter(state.currentUser ? settings.defaultFilter : "all", { render: options.render === true });
}

function setAllianceFilter(filter, options = {}) {
  state.filter = ["all", "NATO", "BRICS"].includes(filter) ? filter : "all";
  syncFilterButtons();

  if (options.render === false) return;
  renderSearchResults();
  updateMapSelection();
}

function syncFilterButtons() {
  document.querySelectorAll(".seg-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
}

function rememberCurrentSelection() {
  const settings = state.currentUser ? normalizeUserSettings(state.currentUser.settings, state.currentUser.profile) : null;
  if (!settings?.rememberSelection) return;
  if (settings.lastCountryId === state.selectedCountryId && settings.lastAircraftId === state.selectedAircraftId) return;

  updateCurrentUser(
    (user) => ({
      ...user,
      settings: {
        ...normalizeUserSettings(user.settings, user.profile),
        lastCountryId: state.selectedCountryId,
        lastAircraftId: state.selectedAircraftId,
      },
    }),
    { render: false, briefing: false },
  );
  renderAuthState();
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    settings: normalizeUserSettings(user.settings, user.profile),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

function normalizeEmail(value) {
  return String(value).trim().toLowerCase();
}

function createUserId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createSalt() {
  if (window.crypto?.getRandomValues) {
    const values = new Uint8Array(16);
    window.crypto.getRandomValues(values);
    return Array.from(values, (value) => value.toString(16).padStart(2, "0")).join("");
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function hashPassword(password, salt) {
  const payload = `${salt}:${password}`;
  if (window.crypto?.subtle) {
    const bytes = new TextEncoder().encode(payload);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (value) => value.toString(16).padStart(2, "0")).join("");
  }

  return fallbackHash(payload);
}

function fallbackHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `fallback-${(hash >>> 0).toString(16)}`;
}

function makeCallSign(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLocaleUpperCase(currentLocale())
    .padEnd(2, "X");
}

function setAuthMessage(message, type = "") {
  elements.authMessage.textContent = message;
  elements.authMessage.dataset.type = type;
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat(currentLocale(), { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatFilterLabel(filter) {
  if (filter === "NATO") return "NATO";
  if (filter === "BRICS") return "BRICS";
  return t("all");
}

function formatProfileLabel(profile) {
  if (profile === "NATO") return t("natoFocused");
  if (profile === "BRICS") return t("bricsFocused");
  return t("neutralObserver");
}

function selectCountry(countryId, aircraftId = null) {
  const selectedCountry = countryById.get(countryId);
  if (!selectedCountry) return;

  state.selectedCountryId = countryId;
  state.selectedAircraftId =
    aircraftId && selectedCountry.aircraft.includes(aircraftId) ? aircraftId : selectedCountry.aircraft[0] || null;

  renderCountrySummary(selectedCountry);
  renderAircraftList(selectedCountry);
  if (elements.countryIntelPanel && !elements.countryIntelPanel.classList.contains("hidden")) {
    renderCountryIntelPanel(selectedCountry);
  }
  updateAiBriefing();
  updateMapSelection();
  renderSearchResults();
  rememberCurrentSelection();
}

function openCountryIntelPanel(countryId = state.selectedCountryId, aircraftId = null) {
  const selectedCountry = countryById.get(countryId);
  if (!selectedCountry) return;

  if (!elements.commandMenu.classList.contains("hidden")) closeCommandMenu();
  selectCountry(countryId, aircraftId);
  renderCountryIntelPanel(selectedCountry);
  elements.countryIntelPanel.classList.remove("hidden");
  elements.countryIntelPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("country-intel-open");
  window.setTimeout(() => elements.countryIntelClose.focus(), 80);
}

function closeCountryIntelPanel() {
  elements.countryIntelPanel.classList.add("hidden");
  elements.countryIntelPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("country-intel-open");
}

function renderCountryIntelPanel(selectedCountry) {
  const countryAnalysis = buildCountryAnalysis(selectedCountry);
  elements.countryIntelCode.textContent = `${selectedCountry.code} / ${selectedCountry.englishName}`;
  elements.countryIntelTitle.textContent = `${countryDisplayName(selectedCountry)} ${t("airPower")}`;
  elements.countryIntelDescription.textContent = countryDescriptionText(selectedCountry);
  elements.countryIntelAlliance.textContent = selectedCountry.alliance;
  elements.countryIntelAlliance.classList.toggle("brics", selectedCountry.alliance === "BRICS");
  elements.countryIntelCommand.textContent = selectedCountry.command;
  elements.countryIntelFocus.textContent = countryFocusText(selectedCountry);
  elements.countryIntelInventoryCount.textContent = platformCountText(selectedCountry.aircraft.length);
  elements.countryIntelInventoryTitle.textContent = `${countryDisplayName(selectedCountry)} ${t("inventoryTitle")}`;
  renderCountryCapabilityRadar(countryAnalysis);
  renderCountrySourceTrust(countryAnalysis);
  renderCountryCriticalAlerts(countryAnalysis);
  renderCountryIntelAnalysis(countryAnalysis);
  renderCountryIntelTimeline(countryAnalysis);
  renderCountryIntelAircraftList(selectedCountry);
}

function renderCountryCapabilityRadar(countryAnalysis) {
  const radarItems = buildCountryCapabilityRadarItems(countryAnalysis);
  const leader = [...radarItems].sort((a, b) => b.value - a.value)[0];
  const riskItem = radarItems.find((item) => item.risk);
  elements.countryRadarSummary.textContent = leader
    ? isEnglish()
      ? `${leader.displayLabel} leads with ${leader.value}. Legacy platform risk is at ${riskItem?.value ?? 0}.`
      : `${leader.displayLabel} ${leader.value} ile öne çıkıyor. Eski platform riski ${riskItem?.value ?? 0} seviyesinde.`
    : isEnglish()
      ? "No capability score could be generated for the selected country."
      : "Seçili ülke için kabiliyet skoru üretilemedi.";
  elements.countryRadarChart.innerHTML = renderCountryRadarSvg(radarItems);
  elements.countryRadarBars.innerHTML = radarItems.map(renderCountryRadarBar).join("");
}

function buildCountryCapabilityRadarItems(countryAnalysis) {
  const contexts = countryAnalysis.contexts || [];
  const platformCount = contexts.length;
  const legacyCount = contexts.filter((context) => context.profile.confidence === "legacy").length;
  const conditionalCount = contexts.filter((context) => context.profile.confidence === "conditional").length;
  const diversityScore = platformCount
    ? clampScore(22 + Math.min(platformCount, 12) * 6 + Math.min(18, new Set(contexts.map((context) => context.aircraft.name.split(" ")[0])).size * 2))
    : 6;
  const legacyRiskScore = platformCount
    ? clampScore((legacyCount / platformCount) * 82 + (conditionalCount / platformCount) * 22)
    : 12;

  return [
    ["Hava-hava", getSignalValue(countryAnalysis.signals, "Hava-hava")],
    ["Taarruz", getSignalValue(countryAnalysis.signals, "Taarruz")],
    ["Stealth", getSignalValue(countryAnalysis.signals, "Stealth")],
    ["Deniz", getSignalValue(countryAnalysis.signals, "Deniz")],
    ["Modernlik", getSignalValue(countryAnalysis.signals, "Modernlik")],
    ["Çeşitlilik", diversityScore],
    ["Legacy riski", legacyRiskScore, true],
  ].map(([label, value, risk]) => ({
    label,
    shortLabel: signalShortDisplayLabel(label),
    displayLabel: signalDisplayLabel(label),
    displayShortLabel: signalShortDisplayLabel(label),
    value: clampScore(value),
    risk: Boolean(risk),
  }));
}

function renderCountryRadarSvg(radarItems) {
  const center = 110;
  const radius = 74;
  const axisPoints = radarItems.map((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / radarItems.length;
    const valueRadius = (item.value / 100) * radius;
    return {
      ...item,
      angle,
      axisX: center + Math.cos(angle) * radius,
      axisY: center + Math.sin(angle) * radius,
      pointX: center + Math.cos(angle) * valueRadius,
      pointY: center + Math.sin(angle) * valueRadius,
      labelX: center + Math.cos(angle) * (radius + 22),
      labelY: center + Math.sin(angle) * (radius + 22),
    };
  });
  const rings = [0.25, 0.5, 0.75, 1]
    .map((scale) => {
      const points = radarItems
        .map((_, index) => {
          const angle = -Math.PI / 2 + (Math.PI * 2 * index) / radarItems.length;
          return `${roundCoord(center + Math.cos(angle) * radius * scale)},${roundCoord(center + Math.sin(angle) * radius * scale)}`;
        })
        .join(" ");
      return `<polygon class="country-radar-ring" points="${points}"></polygon>`;
    })
    .join("");
  const axes = axisPoints
    .map(
      (point) => `
        <line class="country-radar-axis" x1="${center}" y1="${center}" x2="${roundCoord(point.axisX)}" y2="${roundCoord(point.axisY)}"></line>
      `,
    )
    .join("");
  const labels = axisPoints
    .map(
      (point) => `
        <text class="country-radar-label${point.risk ? " risk" : ""}" x="${roundCoord(point.labelX)}" y="${roundCoord(point.labelY)}">
          ${escapeHtml(point.displayShortLabel)}
        </text>
      `,
    )
    .join("");
  const polygonPoints = axisPoints.map((point) => `${roundCoord(point.pointX)},${roundCoord(point.pointY)}`).join(" ");
  const nodes = axisPoints
    .map(
      (point) => `
        <circle class="country-radar-node${point.risk ? " risk" : ""}" cx="${roundCoord(point.pointX)}" cy="${roundCoord(point.pointY)}" r="3.4"></circle>
      `,
    )
    .join("");

  return `
    <svg viewBox="0 0 220 220" role="img" aria-label="${escapeHtml(isEnglish() ? "Country capability radar chart" : "Ülke kabiliyet radar grafiği")}">
      ${rings}
      ${axes}
      <polygon class="country-radar-polygon" points="${polygonPoints}"></polygon>
      ${nodes}
      ${labels}
      <circle class="country-radar-core" cx="${center}" cy="${center}" r="4"></circle>
    </svg>
  `;
}

function renderCountryRadarBar(item) {
  return `
    <div class="country-radar-bar${item.risk ? " risk" : ""}">
      <span>${escapeHtml(item.displayLabel)}</span>
      <i><b style="width:${item.value}%"></b></i>
      <strong>${item.value}</strong>
    </div>
  `;
}

function renderCountrySourceTrust(countryAnalysis) {
  const trust = buildCountrySourceTrust(countryAnalysis);
  elements.countrySourceTrustScore.textContent = String(trust.score);
  elements.countrySourceTrustSummary.textContent = trust.summary;
  elements.countrySourceTrustMeter.style.width = `${trust.score}%`;
  elements.countrySourceTrustGrid.innerHTML = trust.items
    .map(
      (item) => `
        <article class="source-trust-chip ${escapeHtml(item.className)}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${item.count}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </article>
      `,
    )
    .join("");
}

function buildCountrySourceTrust(countryAnalysis) {
  const contexts = countryAnalysis.contexts || [];
  const total = contexts.length;
  const weights = {
    official: 100,
    open: 82,
    estimated: 64,
    conditional: 54,
    legacy: 36,
  };
  const labels = {
    official: confidenceLabelText("official"),
    open: confidenceLabelText("open"),
    estimated: confidenceLabelText("estimated"),
    conditional: isEnglish() ? "Future/conditional" : "Gelecek/koşullu",
    legacy: confidenceLabelText("legacy"),
  };
  const counts = contexts.reduce((result, context) => {
    const confidence = context.profile.confidence || "estimated";
    result[confidence] = (result[confidence] || 0) + 1;
    return result;
  }, {});
  const score = total
    ? clampScore(contexts.reduce((sum, context) => sum + (weights[context.profile.confidence] || weights.estimated), 0) / total)
    : 18;
  const strongCount = (counts.official || 0) + (counts.open || 0);
  const riskCount = (counts.legacy || 0) + (counts.conditional || 0);
  const summary = total
    ? isEnglish()
      ? `${strongCount} of ${platformCountText(total)} sit in the high-trust source layer. ${riskCount} platforms carry legacy or conditional data risk.`
      : `${total} platformun ${strongCount} tanesi yüksek güvenli kaynak katmanında. ${riskCount} platform legacy veya koşullu veri riski taşıyor.`
    : isEnglish()
      ? "No combat jet platform is available to generate a source trust score for this country."
      : "Bu ülke için veri güven skoru üretilecek muharip jet platformu bulunmuyor.";
  const order = ["official", "open", "estimated", "conditional", "legacy"];
  const items = order.map((id) => ({
    id,
    label: labels[id],
    className: id,
    count: counts[id] || 0,
    detail: total ? `%${Math.round(((counts[id] || 0) / total) * 100)}` : "%0",
  }));

  return { score, summary, items };
}

function renderCountryCriticalAlerts(countryAnalysis) {
  const alerts = buildCountryCriticalAlerts(countryAnalysis);
  const criticalCount = alerts.filter((alert) => ["critical", "warning"].includes(alert.severity)).length;
  elements.countryCriticalAlertCount.textContent = signalCountText(alerts.length);
  elements.countryCriticalAlertSummary.textContent = alerts.length
    ? isEnglish()
      ? `${criticalCount} attention signals and ${Math.max(0, alerts.length - criticalCount)} supporting signals generated.`
      : `${criticalCount} dikkat sinyali ve ${Math.max(0, alerts.length - criticalCount)} destekleyici sinyal üretildi.`
    : isEnglish()
      ? "No critical inventory alert was generated for this country."
      : "Bu ülke için kritik envanter uyarısı oluşmadı.";
  elements.countryCriticalAlertGrid.innerHTML = alerts
    .map((alert) => localizeCriticalAlert(alert))
    .map(
      (alert) => `
        <article class="critical-alert-card ${escapeHtml(alert.severity)}">
          <span>${escapeHtml(getCriticalAlertSeverityLabel(alert.severity))}</span>
          <strong>${escapeHtml(alert.title)}</strong>
          <p>${escapeHtml(alert.detail)}</p>
          <small>${escapeHtml(alert.metric)}</small>
        </article>
      `,
    )
    .join("");
}

function buildCountryCriticalAlerts(countryAnalysis) {
  const contexts = countryAnalysis.contexts || [];
  const total = contexts.length;
  const trust = buildCountrySourceTrust(countryAnalysis);
  const radarItems = buildCountryCapabilityRadarItems(countryAnalysis);
  const value = (label) => radarItems.find((item) => item.label === label)?.value || 0;
  const legacyCount = contexts.filter((context) => context.profile.confidence === "legacy").length;
  const conditionalCount = contexts.filter((context) => context.profile.confidence === "conditional").length;
  const legacyRate = total ? Math.round((legacyCount / total) * 100) : 0;
  const conditionalRate = total ? Math.round((conditionalCount / total) * 100) : 0;
  const alerts = [];

  const push = (severity, title, detail, metric) => alerts.push({ severity, title, detail, metric });

  if (!total) {
    push(
      "critical",
      "Muharip jet verisi yok",
      "Bu ülke için sürekli savaş uçağı filosu veri setinde görünmüyor; müttefik hava polisliği veya sınırlı hava savunma modeli öne çıkabilir.",
      "0 platform",
    );
    return alerts;
  }

  if (total <= 2) {
    push(
      "warning",
      "Sınırlı muharip filo",
      "Platform çeşitliliği düşük; tek platform arızası, modernizasyon gecikmesi veya mühimmat kısıtı genel kabiliyeti hızlı etkileyebilir.",
      `${total} platform`,
    );
  } else if (total >= 8) {
    push(
      "positive",
      "Geniş filo çeşitliliği",
      "Çok sayıda platform, görev paylaşımı ve uzmanlaşmış kabiliyet katmanları için daha geniş hareket alanı sağlar.",
      `${total} platform`,
    );
  }

  if (legacyRate >= 30 || legacyCount >= 3) {
    push(
      "warning",
      "Legacy bağımlılığı yüksek",
      "Yaşlı veya tarihsel platformlar bakım, parça, görev uygunluğu ve modern mühimmat entegrasyonu açısından dikkat gerektirir.",
      `${legacyCount}/${total} platform`,
    );
  } else if (legacyCount > 0) {
    push(
      "info",
      "Legacy katman izlenmeli",
      "Eski platform sayısı sınırlı olsa da filo planlamasında modernizasyon ve görev yükü ayrımı önem taşır.",
      `%${legacyRate} legacy`,
    );
  }

  if (conditionalCount > 0) {
    push(
      conditionalRate >= 25 ? "warning" : "info",
      "Gelecek kabiliyeti takvime bağlı",
      "Koşullu veya program aşamasındaki platformlar mevcut operasyonel kapasite gibi okunmamalı; teslimat ve olgunlaşma takvimi belirleyici.",
      `${conditionalCount}/${total} koşullu`,
    );
  }

  if (value("Stealth") < 35) {
    push(
      "warning",
      "Stealth açığı",
      "Düşük görünürlük kabiliyeti sınırlı; hava savunma yoğun ortamda stand-off silah, elektronik harp ve müttefik destek katmanı daha kritik olur.",
      `Stealth ${value("Stealth")}`,
    );
  } else if (value("Stealth") >= 70) {
    push(
      "positive",
      "Stealth katmanı güçlü",
      "Beşinci nesil veya düşük görünürlük platformları, sensör füzyonu ve ilk gün taarruz profili açısından avantaj yaratır.",
      `Stealth ${value("Stealth")}`,
    );
  }

  if (value("Deniz") >= 70) {
    push(
      "positive",
      "Deniz konuşlu kapasite güçlü",
      "Uçak gemisi, STOVL veya deniz odaklı platformlar ülkenin hava gücünü kara üsleri dışına taşıyabilir.",
      `Deniz ${value("Deniz")}`,
    );
  }

  if (value("Modernlik") < 48) {
    push(
      "warning",
      "Modernizasyon baskısı",
      "Modernlik skoru düşük; radar, aviyonik, veri bağı ve mühimmat entegrasyonu genel kabiliyeti sınırlayabilir.",
      `Modernlik ${value("Modernlik")}`,
    );
  }

  if (trust.score < 55) {
    push(
      "warning",
      "Veri güveni sınırlı",
      "Kaynak güven skoru düşük; açık kaynak doğrulaması, platform varyantı ve operasyonel durum bilgisi ayrıca kontrol edilmeli.",
      `Güven ${trust.score}/100`,
    );
  } else if (trust.score >= 78) {
    push(
      "positive",
      "Kaynak güveni yüksek",
      "Resmi veya güçlü açık kaynak katmanı yüksek; platform varyantları daha tutarlı şekilde okunabilir.",
      `Güven ${trust.score}/100`,
    );
  }

  return alerts
    .sort((a, b) => getCriticalAlertRank(a.severity) - getCriticalAlertRank(b.severity))
    .slice(0, 7);
}

function getCriticalAlertSeverityLabel(severity) {
  if (severity === "critical") return isEnglish() ? "Critical" : "Kritik";
  if (severity === "warning") return isEnglish() ? "Warning" : "Uyarı";
  if (severity === "positive") return isEnglish() ? "Advantage" : "Avantaj";
  return isEnglish() ? "Watch" : "İzleme";
}

function localizeCriticalAlert(alert) {
  if (!isEnglish()) return alert;
  const copies = {
    "Muharip jet verisi yok": [
      "No combat jet data",
      "The dataset does not show a standing combat aircraft fleet for this country; allied air policing or limited air defense may be the main model.",
    ],
    "Sınırlı muharip filo": [
      "Limited combat fleet",
      "Low platform diversity means one platform issue, modernization delay or munition constraint can affect overall capability quickly.",
    ],
    "Geniş filo çeşitliliği": [
      "Broad fleet diversity",
      "A larger platform set creates more room for mission split and specialized capability layers.",
    ],
    "Legacy bağımlılığı yüksek": [
      "High legacy dependency",
      "Older or historical platforms require attention around sustainment, parts, mission readiness and modern munition integration.",
    ],
    "Legacy katman izlenmeli": [
      "Legacy layer should be watched",
      "Even limited legacy presence matters for modernization planning and mission load distribution.",
    ],
    "Gelecek kabiliyeti takvime bağlı": [
      "Future capability depends on timeline",
      "Conditional or program-stage platforms should not be read as current operational capacity; delivery and maturation timing are decisive.",
    ],
    "Stealth açığı": [
      "Stealth gap",
      "Low-observable capability is limited; stand-off weapons, electronic warfare and allied support become more important in dense air defense environments.",
    ],
    "Stealth katmanı güçlü": [
      "Strong stealth layer",
      "Fifth-generation or low-observable platforms create advantages for sensor fusion and first-day strike profiles.",
    ],
    "Deniz konuşlu kapasite güçlü": [
      "Strong naval aviation capacity",
      "Carrier, STOVL or naval-focused platforms can project air power beyond land bases.",
    ],
    "Modernizasyon baskısı": [
      "Modernization pressure",
      "A lower modernity score suggests radar, avionics, datalink and weapon integration may limit overall capability.",
    ],
    "Veri güveni sınırlı": [
      "Limited data confidence",
      "The source trust score is low; open-source verification, platform variant and operational status should be checked separately.",
    ],
    "Kaynak güveni yüksek": [
      "High source confidence",
      "Official or strong open-source layers are high; platform variants can be read more consistently.",
    ],
  };
  const copy = copies[alert.title];
  return copy ? { ...alert, title: copy[0], detail: copy[1], metric: localizeMetricText(alert.metric) } : { ...alert, metric: localizeMetricText(alert.metric) };
}

function localizeMetricText(value) {
  return String(value || "")
    .replaceAll("platform", isEnglish() ? "platform" : "platform")
    .replaceAll("koşullu", "conditional")
    .replaceAll("Güven", "Trust")
    .replaceAll("Deniz", "Naval")
    .replaceAll("Modernlik", "Modernity")
    .replaceAll("legacy", "legacy");
}

function getCriticalAlertRank(severity) {
  return { critical: 0, warning: 1, info: 2, positive: 3 }[severity] ?? 4;
}

function clampScore(value) {
  const numeric = Number.isFinite(Number(value)) ? Number(value) : 0;
  return Math.max(0, Math.min(100, Math.round(numeric)));
}

function roundCoord(value) {
  return Math.round(value * 10) / 10;
}

function renderCountryIntelAnalysis(countryAnalysis) {
  const cards = [
    [isEnglish() ? "Primary role" : "Ana rol", countryAnalysis.role],
    [isEnglish() ? "Fleet character" : "Filo karakteri", countryAnalysis.fleetCharacter],
    [isEnglish() ? "Strong side" : "Güçlü taraf", countryAnalysis.strength],
    [isEnglish() ? "Dependency" : "Bağımlı taraf", countryAnalysis.dependency],
    [isEnglish() ? "Modernization path" : "Modernizasyon yönü", countryAnalysis.modernization],
  ];

  elements.countryIntelAnalysisGrid.innerHTML = cards
    .map(
      ([label, value]) => `
        <article>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderCountryIntelTimeline(countryAnalysis) {
  elements.countryIntelTimelineStatus.textContent = countryAnalysis.status;
  elements.countryIntelTimeline.innerHTML = countryAnalysis.timeline
    .map(
      ([label, value], index) => `
        <article class="timeline-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(value)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCountryIntelAircraftList(selectedCountry) {
  elements.countryIntelAircraftList.innerHTML = "";

  if (!selectedCountry.aircraft.length) {
    renderCountryIntelFilterControls([]);
    elements.countryIntelFilterSummary.textContent = isEnglish()
      ? "No filterable combat jet platform is listed for this country."
      : "Bu ülke için filtrelenebilir muharip jet platformu yok.";
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      isEnglish()
        ? "No active combat jet platform has been added for this country, or the country has no standing combat aircraft fleet."
        : "Bu ülke için aktif muharip jet platformu veri setine eklenmedi veya ülkenin sürekli savaş uçağı filosu bulunmuyor.";
    elements.countryIntelAircraftList.append(empty);
    return;
  }

  const entries = selectedCountry.aircraft
    .map((aircraftId) => {
      const item = aircraftById.get(aircraftId);
      if (!item) return null;
      const profile = getCountryAircraftProfile(selectedCountry.id, aircraftId, item);
      return { aircraftId, item, profile };
    })
    .filter(Boolean);
  const filteredEntries = entries.filter((entry) => matchesCountryInventoryFilter(entry));
  const activeFilter = getCountryInventoryFilter(state.countryIntelFilter);

  renderCountryIntelFilterControls(entries);
  elements.countryIntelFilterSummary.textContent =
    state.countryIntelFilter === "all"
      ? isEnglish()
        ? `${platformCountText(entries.length)} shown.`
        : `${entries.length} platform gösteriliyor.`
      : isEnglish()
        ? `${filteredEntries.length} matches in ${platformCountText(entries.length)}: ${optionLabel(activeFilter)}.`
        : `${entries.length} platform içinde ${filteredEntries.length} eşleşme: ${optionLabel(activeFilter)}.`;

  if (!filteredEntries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = isEnglish()
      ? `No platform matches the ${optionLabel(activeFilter)} filter.`
      : `${optionLabel(activeFilter)} filtresine uygun platform bulunamadı.`;
    elements.countryIntelAircraftList.append(empty);
    return;
  }

  filteredEntries.forEach(({ aircraftId, item, profile }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `aircraft-card country-panel-aircraft-card${state.selectedAircraftId === aircraftId ? " active" : ""}`;
    button.classList.toggle("is-favorite", state.favoriteAircraftIds.has(aircraftId));
    button.classList.toggle("is-compared", state.compareAircraftIds.includes(aircraftId));
    button.addEventListener("click", () => {
      state.selectedAircraftId = aircraftId;
      renderAircraftList(selectedCountry);
      renderCountryIntelAircraftList(selectedCountry);
      openAircraftInspectPanel(item, selectedCountry);
      rememberCurrentSelection();
      updateAiBriefing();
    });

    button.innerHTML = `
      <span class="aircraft-thumb"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(profile.displayName)} küçük görseli" loading="lazy"></span>
      <span>
        <h4>${escapeHtml(profile.displayName)}</h4>
        <p>${escapeHtml(aircraftRoleText(item))}</p>
        <span class="aircraft-card-meta">
          <b class="confidence ${escapeHtml(profile.confidenceClass)}">${escapeHtml(profile.confidenceLabel)}</b>
          <em>${escapeHtml(profile.modernization)}</em>
        </span>
        <span class="tag-row">${item.tags.slice(0, 3).map((tag) => `<span class="mini-tag">${escapeHtml(aircraftTagText(tag))}</span>`).join("")}</span>
        <span class="aircraft-card-flags">
          ${state.favoriteAircraftIds.has(aircraftId) ? `<i>${escapeHtml(isEnglish() ? "Favorite" : "Favori")}</i>` : ""}
          ${state.compareAircraftIds.includes(aircraftId) ? `<i>${escapeHtml(isEnglish() ? "Compare" : "Karşılaştırma")}</i>` : ""}
        </span>
      </span>
    `;

    prepareImage(button.querySelector("img"), item, () => {
      button.querySelector("img").hidden = true;
    });
    elements.countryIntelAircraftList.append(button);
  });
}

function renderCountryIntelFilterControls(entries) {
  elements.countryIntelFilters.innerHTML = countryInventoryFilters
    .map((filter) => {
      const count = entries.filter((entry) => matchesCountryInventoryFilter(entry, filter.id)).length;
      return `
        <button
          class="country-inventory-filter${state.countryIntelFilter === filter.id ? " active" : ""}"
          type="button"
          data-country-inventory-filter="${escapeHtml(filter.id)}"
          aria-pressed="${state.countryIntelFilter === filter.id ? "true" : "false"}"
        >
          <span>${escapeHtml(optionLabel(filter))}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function matchesCountryInventoryFilter(entry, filterId = state.countryIntelFilter) {
  if (!entry) return false;
  if (filterId === "all") return true;

  const text = normalize(
    `${entry.item.name} ${entry.item.role} ${entry.item.origin} ${entry.item.tags.join(" ")} ${entry.profile.displayName} ${entry.profile.modernization} ${entry.profile.sourceTier} ${entry.profile.confidenceLabel}`,
  );

  if (filterId === "air") return hasAnyTerm(text, ["hava-hava", "hava ustunlugu", "interceptor", "agir av", " av "]);
  if (filterId === "strike") return hasAnyTerm(text, ["taarruz", "hava-yer", "yakin destek", "bombardiman", "sead", "cok rollu"]);
  if (filterId === "stealth") return hasAnyTerm(text, ["stealth", "5. nesil", "dusuk gorunurluk"]);
  if (filterId === "naval") return hasAnyTerm(text, ["deniz", "stovl", "ucak gemisi", "carrier"]);
  if (filterId === "modern") return hasAnyTerm(text, ["modern", "4.5", "5. nesil", "aesa", "sensor", "resmi", "acik kaynak"]);
  if (filterId === "legacy") return entry.profile.confidence === "legacy" || hasAnyTerm(text, ["legacy", "eski", "klasik"]);
  if (filterId === "conditional") {
    return entry.profile.confidence === "conditional" || hasAnyTerm(text, ["gelecek", "kosullu", "program", "teslimat"]);
  }

  return true;
}

function getCountryInventoryFilter(filterId) {
  return countryInventoryFilters.find((filter) => filter.id === filterId) || countryInventoryFilters[0];
}

function renderCountrySummary(selectedCountry) {
  const countryAnalysis = buildCountryAnalysis(selectedCountry);
  elements.allianceBadge.textContent = selectedCountry.alliance;
  elements.allianceBadge.classList.toggle("brics", selectedCountry.alliance === "BRICS");
  elements.countryCode.textContent = `${selectedCountry.code} / ${selectedCountry.englishName}`;
  elements.countryName.textContent = countryDisplayName(selectedCountry);
  elements.countryDescription.textContent = countryDescriptionText(selectedCountry);
  elements.countryCommand.textContent = selectedCountry.command;
  elements.countryFocus.textContent = countryFocusText(selectedCountry);
  elements.inventoryCount.textContent = platformCountText(selectedCountry.aircraft.length);
  elements.mapReadout.textContent = isEnglish()
    ? `${countryDisplayName(selectedCountry)} selected: ${selectedCountry.alliance} air power view`
    : `${countryDisplayName(selectedCountry)} seçildi: ${selectedCountry.alliance} hava gücü görünümü`;
  renderCountryAnalysis(countryAnalysis);
  renderCountryTimeline(countryAnalysis);
}

function buildCountryAnalysis(selectedCountry) {
  const contexts = selectedCountry.aircraft
    .map((aircraftId) => getAircraftContext(selectedCountry.id, aircraftId))
    .filter(Boolean);
  const signals = calculateSignals(selectedCountry);
  const strongestSignal = [...signals].sort((a, b) => b[1] - a[1])[0] || ["Genel", 0];
  const weakestSignal = [...signals].sort((a, b) => a[1] - b[1])[0] || ["Genel", 0];
  const confidenceCounts = contexts.reduce((counts, context) => {
    counts[context.profile.confidence] = (counts[context.profile.confidence] || 0) + 1;
    return counts;
  }, {});
  const legacyCount = confidenceCounts.legacy || 0;
  const conditionalCount = confidenceCounts.conditional || 0;
  const modernCount = contexts.filter((context) => {
    const text = normalize(`${context.aircraft.name} ${context.aircraft.role} ${context.aircraft.tags.join(" ")}`);
    return hasAnyTerm(text, ["5. nesil", "stealth", "aesa", "modern", "sensor", "4.5"]);
  }).length;
  const carrierCount = contexts.filter((context) => {
    const text = normalize(`${context.aircraft.name} ${context.aircraft.role} ${context.aircraft.tags.join(" ")}`);
    return hasAnyTerm(text, ["deniz", "stovl", "carrier", "ucak gemisi"]);
  }).length;
  const topPlatforms = contexts.slice(0, 3).map((context) => context.profile.displayName);
  const futurePlatforms = contexts.filter((context) => context.profile.confidence === "conditional").map((context) => context.profile.displayName);
  const role = inferCountryPrimaryRole(strongestSignal, selectedCountry, contexts);
  const fleetCharacter = contexts.length
    ? isEnglish()
      ? `${platformCountText(contexts.length)} / ${modernCount} modern or advanced-capability layers`
      : `${contexts.length} platform / ${modernCount} modern veya ileri kabiliyetli katman`
    : isEnglish()
      ? "No standing combat jet fleet appears in the dataset"
      : "Sürekli muharip jet filosu veri setinde görünmüyor";
  const strength = contexts.length
    ? isEnglish()
      ? `${signalDisplayLabel(strongestSignal[0])} leads (${strongestSignal[1]}). ${
          carrierCount ? "Naval-capable aviation also shapes the picture." : "Land-based fleet character is dominant."
        }`
      : `${strongestSignal[0]} alanı öne çıkıyor (${strongestSignal[1]}). ${carrierCount ? "Deniz konuşlu kabiliyet de tabloya etki ediyor." : "Kara konuşlu filo karakteri baskın."}`
    : isEnglish()
      ? "Air policing or allied support is the leading model."
      : "Hava polisliği veya müttefik destek modeli öne çıkıyor.";
  const dependency = inferCountryDependency(legacyCount, conditionalCount, weakestSignal, selectedCountry);
  const modernization = inferCountryModernization(contexts, modernCount, futurePlatforms, selectedCountry);
  const timeline = buildCountryTimelineItems({
    selectedCountry,
    contexts,
    topPlatforms,
    futurePlatforms,
    modernization,
    dependency,
  });

  return {
    selectedCountry,
    contexts,
    signals,
    strongestSignal,
    weakestSignal,
    role,
    fleetCharacter,
    strength,
    dependency,
    modernization,
    timeline,
    status: contexts.length
      ? `${dataLastCheckedText()} / ${t("openSourceReading").toLowerCase()}`
      : isEnglish()
        ? "Limited data"
        : "Sınırlı veri",
  };
}

function inferCountryPrimaryRole(strongestSignal, selectedCountry, contexts) {
  if (!contexts.length) return isEnglish() ? "Allied air policing / limited combat fleet" : "Müttefik hava polisliği / sınırlı muharip filo";
  const focusText = normalize(selectedCountry.focus);
  if (focusText.includes("deniz")) return isEnglish() ? "Naval-capable and multirole air power" : "Deniz konuşlu ve çok rollü hava gücü";
  if (focusText.includes("stealth")) return isEnglish() ? "Stealth and multirole strike architecture" : "Stealth ve çok rollü taarruz mimarisi";
  if (focusText.includes("hava savunmasi") || focusText.includes("hava ustunlugu")) {
    return isEnglish() ? "Air defense / air superiority focus" : "Hava savunması / hava üstünlüğü odağı";
  }
  if (focusText.includes("yakin destek")) return isEnglish() ? "Strike and close support focus" : "Taarruz ve yakın destek odağı";
  return isEnglish() ? `Mixed air power weighted toward ${signalDisplayLabel(strongestSignal[0])}` : `${strongestSignal[0]} ağırlıklı karma hava gücü`;
}

function inferCountryDependency(legacyCount, conditionalCount, weakestSignal, selectedCountry) {
  if (!selectedCountry.aircraft.length) return isEnglish() ? "Dependent on allied air policing and external support" : "Müttefik hava polisliği ve dış destek bağımlılığı";
  if (legacyCount && conditionalCount) {
    return isEnglish()
      ? "Legacy platforms and future programs need to be managed at the same time."
      : "Yaşlı platformlar ile gelecek programlarının aynı anda yönetilmesi gerekiyor.";
  }
  if (legacyCount) {
    return isEnglish()
      ? "Sustainment, modernization and mission readiness of legacy platforms are decisive."
      : "Legacy platformların bakım, modernizasyon ve görev uygunluğu belirleyici.";
  }
  if (conditionalCount) {
    return isEnglish()
      ? "Delivery and maturation timeline of future platforms is the main uncertainty."
      : "Gelecek platformların teslimat ve olgunlaşma takvimi ana belirsizlik.";
  }
  return isEnglish()
    ? `${signalDisplayLabel(weakestSignal[0])} is comparatively lower; integration and munition packages can change the result.`
    : `${weakestSignal[0]} alanı görece daha düşük; entegrasyon ve mühimmat paketi sonucu değiştirebilir.`;
}

function inferCountryModernization(contexts, modernCount, futurePlatforms, selectedCountry) {
  if (!contexts.length) {
    return isEnglish()
      ? "The country is modeled through alliance/shared air security rather than a standing combat jet fleet."
      : "Sürekli muharip jet yerine ittifak/ortak hava güvenliği modeli izleniyor.";
  }
  if (futurePlatforms.length) {
    return isEnglish()
      ? `${futurePlatforms.slice(0, 2).join(", ")} sets the future/conditional modernization direction.`
      : `${futurePlatforms.slice(0, 2).join(", ")} gelecek/koşullu katmanı modernizasyon yönünü belirliyor.`;
  }
  if (modernCount >= Math.max(2, Math.ceil(contexts.length / 2))) {
    return isEnglish()
      ? "Sensors, AESA, stealth or 4.5/5th-generation platforms carry the modernization profile."
      : "Sensör, AESA, stealth veya 4.5/5. nesil platform ağırlığı modernizasyonu taşıyor.";
  }
  return isEnglish()
    ? `Block level, avionics and munition integration are decisive within the ${countryFocusText(selectedCountry)} focus.`
    : `${selectedCountry.focus} odağı çerçevesinde blok, aviyonik ve mühimmat entegrasyonu belirleyici.`;
}

function buildCountryTimelineItems({ selectedCountry, contexts, topPlatforms, futurePlatforms, modernization, dependency }) {
  if (!contexts.length) {
    return [
      [
        isEnglish() ? "Current model" : "Mevcut model",
        isEnglish()
          ? "Alliance air policing or limited air defense replaces a standing combat jet fleet."
          : "Sürekli muharip jet filosu yerine ittifak hava polisliği veya sınırlı hava savunma modeli.",
      ],
      [
        isEnglish() ? "Modernization" : "Modernizasyon",
        isEnglish()
          ? "Radar, air defense and allied integration define the country capacity."
          : "Radar, hava savunma ve müttefik entegrasyonu ülke kapasitesini belirler.",
      ],
      [
        isEnglish() ? "Future direction" : "Gelecek yönü",
        isEnglish()
          ? "Joint training, airspace surveillance and alliance mission sharing stand out."
          : "Müşterek eğitim, hava sahası gözetimi ve ittifak görev paylaşımı öne çıkar.",
      ],
      [
        isEnglish() ? "Uncertainty" : "Belirsizlik",
        isEnglish()
          ? "Public combat jet inventory should be labeled as limited or absent."
          : "Kamuya açık muharip jet envanteri sınırlı veya yok olarak etiketlenmeli.",
      ],
    ];
  }

  return [
    [isEnglish() ? "Current backbone" : "Mevcut omurga", topPlatforms.length ? topPlatforms.join(" / ") : countryFocusText(selectedCountry)],
    [isEnglish() ? "Modernization" : "Modernizasyon", modernization],
    [
      isEnglish() ? "Future platform" : "Gelecek platform",
      futurePlatforms.length
        ? futurePlatforms.slice(0, 3).join(" / ")
        : isEnglish()
          ? "Sensor, munition and avionics updates for current platforms"
          : "Mevcut platformların sensör, mühimmat ve aviyonik güncellemeleri",
    ],
    [isEnglish() ? "Risk / uncertainty" : "Risk / belirsizlik", dependency],
  ];
}

function renderCountryAnalysis(countryAnalysis) {
  const cards = [
    [isEnglish() ? "Primary role" : "Ana rol", countryAnalysis.role],
    [isEnglish() ? "Fleet character" : "Filo karakteri", countryAnalysis.fleetCharacter],
    [isEnglish() ? "Strong side" : "Güçlü taraf", countryAnalysis.strength],
    [isEnglish() ? "Dependency" : "Bağımlı taraf", countryAnalysis.dependency],
    [isEnglish() ? "Modernization path" : "Modernizasyon yönü", countryAnalysis.modernization],
  ];

  elements.countryAnalysisGrid.innerHTML = cards
    .map(
      ([label, value]) => `
        <article>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderCountryTimeline(countryAnalysis) {
  elements.countryTimelineStatus.textContent = countryAnalysis.status;
  elements.countryTimeline.innerHTML = countryAnalysis.timeline
    .map(
      ([label, value], index) => `
        <article class="timeline-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(value)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function openCountryComparePanel(options = {}) {
  if (!elements.commandMenu.classList.contains("hidden")) closeCommandMenu();
  if (!elements.comparePanel.classList.contains("hidden")) closeComparePanel();
  if (!elements.mockAiPanel.classList.contains("hidden")) closeMockAiPanel();
  if (options.fromContext) primeCountryCompareSelection();

  ensureDistinctCountryCompareSelection("A");
  renderCountryCompareSelectors();
  renderCountryCompareAnalysis();
  elements.countryComparePanel.classList.remove("hidden");
  elements.countryComparePanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("country-compare-open");
  window.setTimeout(() => elements.countryCompareA.focus(), 80);
}

function closeCountryComparePanel() {
  elements.countryComparePanel.classList.add("hidden");
  elements.countryComparePanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("country-compare-open");
}

function primeCountryCompareSelection() {
  if (countryById.has(state.selectedCountryId)) {
    state.countryCompareA = state.selectedCountryId;
  }

  if (!countryById.has(state.countryCompareB) || state.countryCompareB === state.countryCompareA) {
    state.countryCompareB = recommendCountryCompareTarget(state.countryCompareA);
  }
}

function recommendCountryCompareTarget(countryId) {
  const preferredPairs = {
    us: "cn",
    cn: "us",
    ru: "us",
    tr: "gr",
    gr: "tr",
    in: "cn",
    gb: "ru",
    fr: "ru",
    de: "ru",
    pl: "ru",
    jp: "cn",
    kr: "cn",
    sa: "ir",
    ir: "sa",
  };
  const preferred = preferredPairs[countryId];
  if (countryById.has(preferred)) return preferred;

  const country = countryById.get(countryId);
  const opposite = countries.find((item) => item.id !== countryId && item.aircraft.length && item.alliance !== country?.alliance);
  return opposite?.id || countries.find((item) => item.id !== countryId)?.id || countryId;
}

function ensureDistinctCountryCompareSelection(changedSide = "A") {
  if (!countryById.has(state.countryCompareA)) state.countryCompareA = state.selectedCountryId;
  if (!countryById.has(state.countryCompareB)) state.countryCompareB = recommendCountryCompareTarget(state.countryCompareA);
  if (state.countryCompareA !== state.countryCompareB) return;

  if (changedSide === "A") {
    state.countryCompareB = recommendCountryCompareTarget(state.countryCompareA);
  } else {
    state.countryCompareA = recommendCountryCompareTarget(state.countryCompareB);
  }

  if (state.countryCompareA === state.countryCompareB) {
    const fallback = countries.find((item) => item.id !== state.countryCompareA);
    if (fallback) state.countryCompareB = fallback.id;
  }
}

function renderCountryCompareSelectors() {
  const optionHtml = countries
    .map(
      (countryItem) => `
        <option value="${escapeHtml(countryItem.id)}" title="${escapeHtml(
          `${countryDisplayName(countryItem)} - ${countryItem.alliance} / ${platformCountText(countryItem.aircraft.length)}`,
        )}">
          ${escapeHtml(countryDisplayName(countryItem))} - ${escapeHtml(countryItem.alliance)} / ${countryItem.aircraft.length}
        </option>
      `,
    )
    .join("");

  elements.countryCompareA.innerHTML = optionHtml;
  elements.countryCompareB.innerHTML = optionHtml;
  elements.countryCompareA.value = state.countryCompareA;
  elements.countryCompareB.value = state.countryCompareB;
}

function renderCountryCompareAnalysis() {
  const countryA = countryById.get(state.countryCompareA);
  const countryB = countryById.get(state.countryCompareB);

  if (!countryA || !countryB) {
    elements.countryCompareVerdict.innerHTML = `<p>${escapeHtml(isEnglish() ? "Select two countries for comparison." : "Karşılaştırma için iki ülke seç.")}</p>`;
    elements.countryCompareScoreGrid.innerHTML = "";
    elements.countryCompareFactorGrid.innerHTML = "";
    elements.countryCompareBars.innerHTML = "";
    return;
  }

  const analysisA = buildCountryAnalysis(countryA);
  const analysisB = buildCountryAnalysis(countryB);
  const metrics = buildCountryCompareMetrics(analysisA, analysisB);
  const scoreA = calculateCountryCompareScore(metrics, "A");
  const scoreB = calculateCountryCompareScore(metrics, "B");
  const delta = scoreA - scoreB;
  const leader = Math.abs(delta) < 5 ? null : delta > 0 ? analysisA : analysisB;
  const leaderScore = delta > 0 ? scoreA : scoreB;
  const trailingScore = delta > 0 ? scoreB : scoreA;

  elements.countryCompareSummary.textContent = isEnglish()
    ? `${countryDisplayName(countryA)} ↔ ${countryDisplayName(countryB)} / Last checked: ${dataLastCheckedText()}`
    : `${countryA.name} ↔ ${countryB.name} / Son kontrol: ${DATA_LAST_CHECKED}`;
  elements.countryCompareVerdict.innerHTML = `
    <p class="eyebrow">${escapeHtml(isEnglish() ? "AI country comparison result" : "AI ülke karşılaştırma sonucu")}</p>
    <h3>${escapeHtml(
      leader
        ? isEnglish()
          ? `${countryDisplayName(leader.selectedCountry)} leads`
          : `${leader.selectedCountry.name} öne çıkıyor`
        : isEnglish()
          ? "Balanced country profile"
          : "Dengeli ülke profili",
    )}</h3>
    <p>${escapeHtml(
      leader
        ? isEnglish()
          ? `${countryDisplayName(leader.selectedCountry)} leads the general air power profile by +${Math.abs(leaderScore - trailingScore)} points.`
          : `${leader.selectedCountry.name}, genel hava gücü profilinde +${Math.abs(leaderScore - trailingScore)} puan önde.`
        : isEnglish()
          ? `${countryDisplayName(countryA)} and ${countryDisplayName(countryB)} look close in the general profile.`
          : `${countryA.name} ve ${countryB.name} genel profilde yakın görünüyor.`,
    )} ${escapeHtml(buildCountryCompareNarrative(analysisA, analysisB, metrics))}</p>
    <small class="ai-source-note">${escapeHtml(
      isEnglish()
        ? "Analysis note: scores are prepared from platform count, capability signals, legacy/conditional risk and country-specific variant confidence tags."
        : "Analiz notu: skorlar platform sayısı, kabiliyet sinyalleri, legacy/koşullu risk ve ülkeye özel varyant güven etiketleri üzerinden hazırlanır.",
    )}</small>
  `;

  elements.countryCompareScoreGrid.innerHTML = [
    renderCountryCompareScoreCard(analysisA, scoreA, isEnglish() ? "1st country" : "1. ülke"),
    renderCountryCompareScoreCard(analysisB, scoreB, isEnglish() ? "2nd country" : "2. ülke"),
  ].join("");
  elements.countryCompareFactorGrid.innerHTML = renderCountryCompareFactorCards(analysisA, analysisB, metrics);
  elements.countryCompareBars.innerHTML = metrics.map(renderCountryCompareMetricRow).join("");
}

function buildCountryCompareMetrics(analysisA, analysisB) {
  const legacyA = getCountryConfidenceCount(analysisA, "legacy");
  const legacyB = getCountryConfidenceCount(analysisB, "legacy");
  const conditionalA = getCountryConfidenceCount(analysisA, "conditional");
  const conditionalB = getCountryConfidenceCount(analysisB, "conditional");
  const countA = analysisA.contexts.length;
  const countB = analysisB.contexts.length;
  const riskValue = (count, riskCount) => (count ? Math.round((riskCount / count) * 100) : 0);

  return [
    {
      id: "platforms",
      label: isEnglish() ? "Platform diversity" : "Platform çeşitliliği",
      valueA: Math.min(100, countA * 8 + (countA ? 8 : 0)),
      valueB: Math.min(100, countB * 8 + (countB ? 8 : 0)),
      displayA: platformCountText(countA),
      displayB: platformCountText(countB),
      lowerBetter: false,
    },
    metricFromSignal("air", "Hava-hava", analysisA, analysisB),
    metricFromSignal("strike", "Taarruz", analysisA, analysisB),
    metricFromSignal("stealth", "Stealth", analysisA, analysisB),
    metricFromSignal("modern", "Modernlik", analysisA, analysisB),
    {
      id: "legacy",
      label: isEnglish() ? "Legacy dependency" : "Legacy bağımlılığı",
      valueA: riskValue(countA, legacyA),
      valueB: riskValue(countB, legacyB),
      displayA: `${legacyA}/${Math.max(1, countA)}`,
      displayB: `${legacyB}/${Math.max(1, countB)}`,
      lowerBetter: true,
    },
    {
      id: "future",
      label: isEnglish() ? "Future platform risk" : "Gelecek platform riski",
      valueA: riskValue(countA, conditionalA),
      valueB: riskValue(countB, conditionalB),
      displayA: `${conditionalA}/${Math.max(1, countA)}`,
      displayB: `${conditionalB}/${Math.max(1, countB)}`,
      lowerBetter: true,
    },
  ];
}

function metricFromSignal(id, label, analysisA, analysisB) {
  const valueA = getSignalValue(analysisA.signals, label);
  const valueB = getSignalValue(analysisB.signals, label);
  return {
    id,
    label: signalDisplayLabel(label),
    valueA,
    valueB,
    displayA: String(valueA),
    displayB: String(valueB),
    lowerBetter: false,
  };
}

function getCountryConfidenceCount(analysis, confidence) {
  return analysis.contexts.filter((context) => context.profile.confidence === confidence).length;
}

function calculateCountryCompareScore(metrics, side) {
  const key = side === "A" ? "valueA" : "valueB";
  const score = metrics.reduce((total, metric) => {
    const value = metric[key] || 0;
    return total + (metric.lowerBetter ? 100 - value : value);
  }, 0);
  return Math.round(score / Math.max(1, metrics.length));
}

function renderCountryCompareScoreCard(analysis, score, label) {
  const legacyCount = getCountryConfidenceCount(analysis, "legacy");
  const conditionalCount = getCountryConfidenceCount(analysis, "conditional");
  return `
    <article class="country-compare-score-card">
      <p class="eyebrow">${escapeHtml(label)}</p>
      <h3>${escapeHtml(countryDisplayName(analysis.selectedCountry))}</h3>
      <span>${escapeHtml(analysis.selectedCountry.alliance)} / ${escapeHtml(platformCountText(analysis.contexts.length))}</span>
      <strong>${score}</strong>
      <small>${escapeHtml(isEnglish() ? "Strongest signal" : "En güçlü sinyal")}: ${escapeHtml(
        signalDisplayLabel(analysis.strongestSignal[0]),
      )} ${escapeHtml(analysis.strongestSignal[1])}</small>
      <small>${escapeHtml(isEnglish() ? "Risk tag" : "Risk etiketi")}: ${legacyCount} legacy / ${conditionalCount} ${
        isEnglish() ? "conditional" : "koşullu"
      }</small>
    </article>
  `;
}

function renderCountryCompareFactorCards(analysisA, analysisB, metrics) {
  const scaleMetric = metrics.find((metric) => metric.id === "platforms");
  const modernMetric = metrics.find((metric) => metric.id === "modern");
  const riskMetric = metrics.find((metric) => metric.id === "legacy");
  const futureMetric = metrics.find((metric) => metric.id === "future");
  const factors = [
    [isEnglish() ? "Fleet scale" : "Filo ölçeği", describeMetricAdvantage(scaleMetric, analysisA, analysisB)],
    [isEnglish() ? "Modernization" : "Modernizasyon", describeMetricAdvantage(modernMetric, analysisA, analysisB)],
    [isEnglish() ? "Legacy risk" : "Legacy riski", describeMetricAdvantage(riskMetric, analysisA, analysisB)],
    [isEnglish() ? "Future risk" : "Gelecek riski", describeMetricAdvantage(futureMetric, analysisA, analysisB)],
  ];

  return factors
    .map(
      ([label, value]) => `
        <article class="country-compare-factor-card">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value.title)}</strong>
          <small>${escapeHtml(value.detail)}</small>
        </article>
      `,
    )
    .join("");
}

function describeMetricAdvantage(metric, analysisA, analysisB) {
  const delta = (metric.valueA || 0) - (metric.valueB || 0);
  const absDelta = Math.abs(delta);
  if (absDelta < 5) {
    return {
      title: isEnglish() ? "Balanced" : "Dengeli",
      detail: isEnglish()
        ? `${metric.label} gap is low; mission context is decisive.`
        : `${metric.label} farkı düşük; görev bağlamı belirleyici.`,
    };
  }

  const winner =
    metric.lowerBetter
      ? delta < 0
        ? analysisA
        : analysisB
      : delta > 0
        ? analysisA
        : analysisB;
  const direction = metric.lowerBetter ? "daha düşük risk" : "daha yüksek skor";
  return {
    title: countryDisplayName(winner.selectedCountry),
    detail: isEnglish()
      ? `${metric.label} stands out with ${metric.lowerBetter ? "lower risk" : "a higher score"}.`
      : `${metric.label} alanında ${direction} ile öne çıkıyor.`,
  };
}

function renderCountryCompareMetricRow(metric) {
  const delta = metric.valueA - metric.valueB;
  const advantage = metric.lowerBetter ? -delta : delta;
  const deltaText = Math.abs(advantage) < 5 ? "0" : advantage > 0 ? `A +${Math.abs(advantage)}` : `B +${Math.abs(advantage)}`;
  return `
    <div class="country-compare-bar-row">
      <span>${escapeHtml(metric.label)}</span>
      <div class="country-compare-dual-bars">
        <i><b style="width:${metric.valueA}%"></b></i>
        <i><b style="width:${metric.valueB}%"></b></i>
      </div>
      <strong>${escapeHtml(deltaText)}</strong>
      <small>${escapeHtml(metric.displayA)} / ${escapeHtml(metric.displayB)}${metric.lowerBetter ? ` / ${escapeHtml(t("lowBetter"))}` : ""}</small>
    </div>
  `;
}

function buildCountryCompareNarrative(analysisA, analysisB, metrics) {
  const ranked = metrics
    .map((metric) => ({
      metric,
      advantage: metric.lowerBetter ? metric.valueB - metric.valueA : metric.valueA - metric.valueB,
    }))
    .sort((a, b) => Math.abs(b.advantage) - Math.abs(a.advantage));
  const top = ranked[0];
  const second = ranked[1];
  const topWinner = top?.advantage > 0 ? countryDisplayName(analysisA.selectedCountry) : countryDisplayName(analysisB.selectedCountry);
  const secondWinner = second?.advantage > 0 ? countryDisplayName(analysisA.selectedCountry) : countryDisplayName(analysisB.selectedCountry);
  const modernization = `${countryDisplayName(analysisA.selectedCountry)}: ${analysisA.modernization} ${countryDisplayName(
    analysisB.selectedCountry,
  )}: ${analysisB.modernization}`;

  if (!top || Math.abs(top.advantage) < 5) {
    return isEnglish() ? `The two countries are balanced in general metrics. ${modernization}` : `İki ülke genel metriklerde dengeli. ${modernization}`;
  }

  return isEnglish()
    ? `The clearest separation is in ${top.metric.label} for ${topWinner}. The second gap appears in ${
        second?.metric.label || signalDisplayLabel("Modernlik")
      } for ${secondWinner}. ${modernization}`
    : `En belirgin ayrışma ${top.metric.label} alanında ${topWinner} lehine. İkinci fark ${second?.metric.label || "Modernlik"} alanında ${secondWinner} tarafında görülüyor. ${modernization}`;
}

function renderAircraftList(selectedCountry) {
  elements.aircraftList.innerHTML = "";

  if (!selectedCountry.aircraft.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      isEnglish()
        ? "No active combat jet platform has been added for this country, or the country has no standing combat aircraft fleet."
        : "Bu ülke için aktif muharip jet platformu veri setine eklenmedi veya ülkenin sürekli savaş uçağı filosu bulunmuyor.";
    elements.aircraftList.append(empty);
    return;
  }

  selectedCountry.aircraft.forEach((aircraftId) => {
    const item = aircraftById.get(aircraftId);
    if (!item) return;
    const profile = getCountryAircraftProfile(selectedCountry.id, aircraftId, item);

    const button = document.createElement("button");
    button.type = "button";
    button.className = `aircraft-card${state.selectedAircraftId === aircraftId ? " active" : ""}`;
    button.classList.toggle("is-favorite", state.favoriteAircraftIds.has(aircraftId));
    button.classList.toggle("is-compared", state.compareAircraftIds.includes(aircraftId));
    button.addEventListener("click", () => {
      state.selectedAircraftId = aircraftId;
      renderAircraftList(selectedCountry);
      openAircraftInspectPanel(item, selectedCountry);
      rememberCurrentSelection();
      updateAiBriefing();
    });

    button.innerHTML = `
      <span class="aircraft-thumb"><img src="${item.image}" alt="${escapeHtml(
        isEnglish() ? `${profile.displayName} thumbnail image` : `${profile.displayName} küçük görseli`,
      )}" loading="lazy"></span>
      <span>
        <h4>${escapeHtml(profile.displayName)}</h4>
        <p>${escapeHtml(aircraftRoleText(item))}</p>
        <span class="aircraft-card-meta">
          <b class="confidence ${escapeHtml(profile.confidenceClass)}">${escapeHtml(profile.confidenceLabel)}</b>
          <em>${escapeHtml(profile.modernization)}</em>
        </span>
        <span class="tag-row">${item.tags.slice(0, 3).map((tag) => `<span class="mini-tag">${escapeHtml(aircraftTagText(tag))}</span>`).join("")}</span>
        <span class="aircraft-card-flags">
          ${state.favoriteAircraftIds.has(aircraftId) ? `<i>${escapeHtml(isEnglish() ? "Favorite" : "Favori")}</i>` : ""}
          ${state.compareAircraftIds.includes(aircraftId) ? `<i>${escapeHtml(isEnglish() ? "Compare" : "Karşılaştırma")}</i>` : ""}
        </span>
      </span>
    `;

    prepareImage(button.querySelector("img"), item, () => {
      button.querySelector("img").hidden = true;
    });
    elements.aircraftList.append(button);
  });
}

function openAircraftInspectPanel(selectedAircraft, selectedCountry) {
  if (!selectedAircraft) return;
  state.selectedAircraftId = Object.entries(aircraft).find(([, item]) => item === selectedAircraft)?.[0] || state.selectedAircraftId;
  const aircraftProfile = getCountryAircraftProfile(selectedCountry.id, state.selectedAircraftId, selectedAircraft);

  elements.inspectAircraftImage.hidden = false;
  elements.inspectImageFallback.classList.remove("visible");
  delete elements.inspectAircraftImage.dataset.stage;
  delete elements.inspectAircraftImage.dataset.remote;
  delete elements.inspectAircraftImage.dataset.backup;
  prepareImage(elements.inspectAircraftImage, selectedAircraft);
  elements.inspectAircraftImage.src = selectedAircraft.image;
  elements.inspectAircraftImage.alt = isEnglish()
    ? `${aircraftProfile.displayName} combat aircraft image`
    : `${aircraftProfile.displayName} gerçek savaş uçağı görseli`;
  elements.inspectImageCredit.href = selectedAircraft.source;
  elements.inspectImageCredit.textContent = "Wikimedia Commons";
  elements.inspectAllianceBadge.textContent = selectedCountry.alliance;
  elements.inspectAllianceBadge.classList.toggle("brics", selectedCountry.alliance === "BRICS");
  const aircraftIndex = Math.max(0, selectedCountry.aircraft.indexOf(state.selectedAircraftId));
  elements.inspectInventoryPosition.textContent = `${String(aircraftIndex + 1).padStart(2, "0")} / ${String(
    selectedCountry.aircraft.length,
  ).padStart(2, "0")}`;
  elements.inspectCountryContext.textContent = `${countryDisplayName(selectedCountry)} / ${aircraftOriginText(selectedAircraft)} / ${aircraftProfile.sourceTier}`;
  elements.inspectAircraftTitle.textContent = aircraftProfile.displayName;
  elements.inspectAircraftRole.textContent = aircraftRoleText(selectedAircraft);
  elements.inspectAircraftNote.textContent = isEnglish()
    ? `${aircraftRoleText(selectedAircraft)} ${profileNoteText(aircraftProfile, selectedCountry, selectedAircraft)}`
    : `${selectedAircraft.note} ${aircraftProfile.note}`;
  renderInspectMetaGrid(selectedCountry, selectedAircraft, aircraftIndex, aircraftProfile);
  renderSpecGrid(elements.inspectSpecGrid, selectedAircraft);
  renderAircraftCapabilityBars(elements.inspectCapabilityBars, selectedAircraft, aircraftProfile);
  renderCapabilityRow(elements.inspectCapabilityRow, selectedAircraft);
  renderInspectInventoryContext(selectedCountry, selectedAircraft, aircraftIndex, aircraftProfile);
  renderInspectSourceGrid(selectedCountry, selectedAircraft, aircraftProfile);
  renderMunitionTrigger(state.selectedAircraftId, selectedAircraft);
  renderInspectActionState();
  if (!elements.munitionPanel.classList.contains("hidden")) {
    renderMunitionPanel(selectedAircraft, selectedCountry);
  }

  elements.aircraftInspect.classList.remove("hidden");
  elements.aircraftInspect.setAttribute("aria-hidden", "false");
  document.body.classList.add("inspect-open");
  window.setTimeout(() => elements.inspectClose.focus(), 120);
}

function closeAircraftInspectPanel() {
  closeMunitionPanel();
  elements.aircraftInspect.classList.add("hidden");
  elements.aircraftInspect.setAttribute("aria-hidden", "true");
  document.body.classList.remove("inspect-open");
}

function moveInspectSelection(direction) {
  const selectedCountry = countryById.get(state.selectedCountryId);
  if (!selectedCountry?.aircraft.length) return;

  const currentIndex = Math.max(0, selectedCountry.aircraft.indexOf(state.selectedAircraftId));
  const nextIndex = (currentIndex + direction + selectedCountry.aircraft.length) % selectedCountry.aircraft.length;
  const nextAircraftId = selectedCountry.aircraft[nextIndex];
  const nextAircraft = aircraftById.get(nextAircraftId);
  if (!nextAircraft) return;

  state.selectedAircraftId = nextAircraftId;
  renderAircraftList(selectedCountry);
  openAircraftInspectPanel(nextAircraft, selectedCountry);
  updateAiBriefing();
}

function renderInspectMetaGrid(selectedCountry, selectedAircraft, aircraftIndex, aircraftProfile) {
  const meta = [
    [isEnglish() ? "Country" : "Ülke", countryDisplayName(selectedCountry)],
    [isEnglish() ? "Alliance" : "İttifak", selectedCountry.alliance],
    [isEnglish() ? "Variant" : "Varyant", aircraftProfile.variant],
    [isEnglish() ? "Data confidence" : "Veri güveni", aircraftProfile.confidenceLabel],
    [isEnglish() ? "Modernization" : "Modernizasyon", aircraftProfile.modernization],
    [
      t("inventoryLabel"),
      isEnglish()
        ? `Platform ${aircraftIndex + 1} of ${selectedCountry.aircraft.length}`
        : `${aircraftIndex + 1}. platform / ${selectedCountry.aircraft.length}`,
    ],
  ];

  elements.inspectMetaGrid.innerHTML = meta
    .map(
      ([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderInspectInventoryContext(selectedCountry, selectedAircraft, aircraftIndex, aircraftProfile) {
  elements.inspectInventoryContext.textContent = isEnglish()
    ? `${aircraftProfile.displayName} is being reviewed as platform ${aircraftIndex + 1} in the ${countryDisplayName(
        selectedCountry,
      )} inventory. Country focus: ${countryFocusText(selectedCountry)}. Data layer: ${aircraftProfile.sourceTier}.`
    : `${aircraftProfile.displayName}, ${selectedCountry.name} envanterinde ${aircraftIndex + 1}. sırada inceleniyor. Ülke odağı: ${selectedCountry.focus}. Veri katmanı: ${aircraftProfile.sourceTier}.`;
}

function renderInspectSourceGrid(selectedCountry, selectedAircraft, aircraftProfile) {
  const dataSource = aircraftProfile.sourceUrl
    ? `<a href="${escapeHtml(aircraftProfile.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(aircraftProfile.sourceTier)}</a>`
    : `<span>${escapeHtml(aircraftProfile.sourceTier)}</span>`;
  const imageSource = selectedAircraft.source
    ? `<a href="${escapeHtml(selectedAircraft.source)}" target="_blank" rel="noreferrer">${escapeHtml(
        isEnglish() ? "Wikimedia Commons file" : "Wikimedia Commons dosyası",
      )}</a>`
    : `<span>${escapeHtml(isEnglish() ? "Local/representative image" : "Yerel/temsili görsel")}</span>`;
  const sourceItems = [
    [t("sourceData"), dataSource],
    [t("imageSource"), imageSource],
    [t("lastChecked"), `<span>${escapeHtml(aircraftProfile.lastChecked)}</span>`],
    [t("trustLevel"), `<span class="confidence ${escapeHtml(aircraftProfile.confidenceClass)}">${escapeHtml(aircraftProfile.confidenceLabel)}</span>`],
  ];

  elements.inspectSourceGrid.innerHTML = sourceItems
    .map(
      ([label, value]) => `
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderMunitionTrigger(aircraftId, selectedAircraft) {
  const profile = getMunitionProfile(aircraftId, selectedAircraft);
  const count = countMunitions(profile);
  elements.inspectMunitionCount.textContent = munitionCountText(count);
}

function openMunitionPanel() {
  const selectedCountry = countryById.get(state.selectedCountryId);
  const selectedAircraft = aircraftById.get(state.selectedAircraftId);
  if (!selectedAircraft) return;

  renderMunitionPanel(selectedAircraft, selectedCountry);
  elements.munitionPanel.classList.remove("hidden");
  elements.munitionPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("munition-panel-open");
  window.setTimeout(() => elements.munitionClose.focus(), 80);
}

function closeMunitionPanel() {
  if (!elements.munitionPanel || elements.munitionPanel.classList.contains("hidden")) return;
  elements.munitionPanel.classList.add("hidden");
  elements.munitionPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("munition-panel-open");
}

function renderMunitionPanel(selectedAircraft, selectedCountry) {
  if (!selectedAircraft) return;
  const aircraftId = state.selectedAircraftId;
  const profile = getMunitionProfile(aircraftId, selectedAircraft);
  const munitionItems = flattenMunitionItems(profile);
  const filteredCategories = filterMunitionCategories(profile, state.munitionFilter);
  const filteredMunitionItems = flattenMunitionItems({ ...profile, categories: filteredCategories });
  const categoryCount = profile.categories.length;
  const munitionCount = munitionItems.length;
  const missionText = profile.categories.map((category) => category.title).join(" / ");
  const currentSelection =
    filteredMunitionItems.find(
      (item) => item.name === state.selectedMunitionName && item.category === state.selectedMunitionCategory,
    ) ||
    filteredMunitionItems.find((item) => item.name === state.selectedMunitionName) ||
    filteredMunitionItems[0];

  if (currentSelection) {
    state.selectedMunitionName = currentSelection.name;
    state.selectedMunitionCategory = currentSelection.category;
  }

  elements.munitionSubtitle.textContent = `${selectedCountry ? countryDisplayName(selectedCountry) : aircraftOriginText(selectedAircraft)} / ${aircraftOriginText(selectedAircraft)}`;
  elements.munitionTitle.textContent = isEnglish() ? `${selectedAircraft.name} Munition Profile` : `${selectedAircraft.name} Mühimmat Profili`;
  elements.munitionSummary.textContent = munitionProfileSummaryText(profile, selectedAircraft);
  elements.munitionStats.innerHTML = [
    [isEnglish() ? "Categories" : "Kategori", String(categoryCount).padStart(2, "0")],
    [isEnglish() ? "Munitions" : "Mühimmat", String(munitionCount).padStart(2, "0")],
    [isEnglish() ? "Shown" : "Gösterilen", String(filteredMunitionItems.length).padStart(2, "0")],
    [isEnglish() ? "Mission set" : "Görev seti", isEnglish() ? profile.categories.map((category) => munitionCategoryText(category.title)).join(" / ") : missionText],
    [isEnglish() ? "Status" : "Durum", munitionStatusText(profile.caveat)],
  ]
    .map(
      ([label, value]) => `
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `,
    )
    .join("");

  renderMunitionFilters(profile);

  elements.munitionCategories.innerHTML = filteredCategories.length
    ? filteredCategories
        .map(
          (category) => `
            <article class="munition-category">
              <h3>${escapeHtml(munitionCategoryText(category.title))}</h3>
              <div class="munition-chip-row">
                ${category.items
                  .map((item) => {
                    const itemName = getMunitionItemName(item);
                    const isActive = itemName === state.selectedMunitionName && category.title === state.selectedMunitionCategory;
                    return `
                      <button
                        class="munition-chip${isActive ? " active" : ""}"
                        type="button"
                        data-munition-name="${escapeHtml(itemName)}"
                        data-munition-category="${escapeHtml(category.title)}"
                      >
                        ${escapeHtml(itemName)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </article>
          `,
        )
        .join("")
    : `<p class="munition-empty">${escapeHtml(isEnglish() ? "No registered munition matches this filter." : "Bu filtre için kayıtlı mühimmat bulunamadı.")}</p>`;

  if (currentSelection) {
    renderMunitionDetail(currentSelection.name, currentSelection.category);
  } else {
    clearMunitionDetail();
  }
}

function selectMunitionDetail(munitionName, categoryTitle) {
  state.selectedMunitionName = munitionName;
  state.selectedMunitionCategory = categoryTitle;
  renderMunitionDetail(munitionName, categoryTitle);

  elements.munitionCategories.querySelectorAll("[data-munition-name]").forEach((button) => {
    button.classList.toggle("active", button.dataset.munitionName === munitionName);
  });
}

function renderMunitionDetail(munitionName, categoryTitle) {
  const detail = getMunitionDetail(munitionName, categoryTitle);
  const confidence = getMunitionConfidence(munitionName, categoryTitle, detail);
  elements.munitionDetailCategory.textContent = `${munitionCategoryText(categoryTitle)} / ${munitionVisualLabelText(detail.visualLabel)} / ${munitionConfidenceLabelText(confidence)}`;
  elements.munitionDetailCategory.dataset.confidence = confidence.level;
  elements.munitionDetailName.textContent = detail.name;
  elements.munitionDetailDescription.textContent = munitionDetailDescriptionText(detail, categoryTitle);
  elements.munitionDetailRole.textContent = munitionRoleText(detail, categoryTitle);
  elements.munitionDetailGuidance.textContent = munitionGuidanceText(detail);
  elements.munitionDetailOrigin.textContent = munitionOriginText(detail);
  elements.munitionDetailNote.textContent = munitionNoteText(detail);
  renderMunitionImage(detail, categoryTitle);
}

function renderMunitionImage(detail, categoryTitle) {
  const fallbackImage = createMunitionVisual(detail);
  const fallbackAlt = isEnglish()
    ? `Representative ${munitionVisualLabelText(detail.visualLabel).toLocaleLowerCase(currentLocale())} visual for ${detail.name}`
    : `${detail.name} için temsili ${detail.visualLabel.toLocaleLowerCase("tr-TR")} görseli`;
  const requestKey = `${categoryTitle}::${detail.name}`;
  elements.munitionDetailImage.dataset.munitionKey = requestKey;
  elements.munitionDetailImage.onerror = null;

  if (!detail.photo) {
    elements.munitionDetailImage.src = fallbackImage;
    elements.munitionDetailImage.alt = fallbackAlt;
    setMunitionImageCredit(null);
    return;
  }

  applyMunitionPhoto(detail.photo, detail, categoryTitle, fallbackImage, fallbackAlt);
}

function applyMunitionPhoto(photo, detail, categoryTitle, fallbackImage, fallbackAlt) {
  elements.munitionDetailImage.dataset.imageStage = photo.localImage ? "local" : "remote";
  elements.munitionDetailImage.onerror = () => {
    if (elements.munitionDetailImage.dataset.imageStage === "local" && photo.remoteImage) {
      elements.munitionDetailImage.dataset.imageStage = "remote";
      elements.munitionDetailImage.src = photo.remoteImage;
      return;
    }

    elements.munitionDetailImage.onerror = null;
    elements.munitionDetailImage.src = fallbackImage;
    elements.munitionDetailImage.alt = fallbackAlt;
    setMunitionImageCredit(null);
  };
  elements.munitionDetailImage.src = photo.localImage || photo.remoteImage;
  elements.munitionDetailImage.alt = isEnglish() ? `${detail.name} munition image` : `${detail.name} mühimmat görseli`;
  setMunitionImageCredit(photo);
}

function setMunitionImageCredit(photo) {
  if (!elements.munitionImageCredit) return;

  if (!photo) {
    elements.munitionImageCredit.classList.add("hidden");
    elements.munitionImageCredit.removeAttribute("href");
    return;
  }

  elements.munitionImageCredit.href = photo.source;
  elements.munitionImageCredit.textContent = "Wikimedia Commons";
  elements.munitionImageCredit.classList.remove("hidden");
}

function getMunitionProfile(aircraftId, selectedAircraft) {
  return (
    munitionProfiles[aircraftId] ||
    munitions(`${selectedAircraft.name} için doğrulanmış özel mühimmat profili henüz genişletilmedi. Genel çok rollü mühimmat çerçevesi gösteriliyor.`, [
      mcat("Hava-hava", ["Kısa menzil hava-hava füzeleri", "Orta menzil hava-hava füzeleri"]),
      mcat("Hava-yer", ["Serbest düşüş bombaları", "Lazer/GPS güdümlü bombalar", "Roket podları"]),
    ])
  );
}

function countMunitions(profile) {
  return profile.categories.reduce((total, category) => total + category.items.length, 0);
}

function flattenMunitionItems(profile) {
  return profile.categories.flatMap((category) =>
    category.items.map((item) => ({
      name: getMunitionItemName(item),
      category: category.title,
    })),
  );
}

function getMunitionItemName(item) {
  return typeof item === "string" ? item : item?.name || "Mühimmat";
}

function filterMunitionCategories(profile, filterId = state.munitionFilter) {
  return profile.categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => matchesMunitionFilter(getMunitionItemName(item), category.title, filterId)),
    }))
    .filter((category) => category.items.length);
}

function renderMunitionFilters(profile) {
  const items = flattenMunitionItems(profile);
  elements.munitionFilters.innerHTML = munitionFilterOptions
    .map((filter) => {
      const count =
        filter.id === "all"
          ? items.length
          : items.filter((item) => matchesMunitionFilter(item.name, item.category, filter.id)).length;
      return `
        <button
          class="munition-filter${state.munitionFilter === filter.id ? " active" : ""}"
          type="button"
          data-munition-filter="${escapeHtml(filter.id)}"
        >
          <span>${escapeHtml(optionLabel(filter))}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function matchesMunitionFilter(munitionName, categoryTitle, filterId = state.munitionFilter) {
  if (filterId === "all") return true;
  const type = getMunitionFilterType(munitionName, categoryTitle);
  if (filterId === "strike") return ["strike", "standoff", "bomb", "rocket"].includes(type);
  return type === filterId;
}

function getMunitionFilterType(munitionName, categoryTitle) {
  const text = normalize(`${munitionName} ${categoryTitle}`);

  if (hasAnyTerm(text, ["top", "cannon", "gun", "gau", "gsh", "aden", "defa", "m39", "m61"])) return "gun";
  if (hasAnyTerm(text, ["pod", "hedefleme", "kesif", "jammer", "alq", "talios", "sniper", "harici yakit"])) return "pod";
  if (hasAnyTerm(text, ["roket", "rocket", "hydra", "apkws", "crv7", "s-5", "s-8", "s-13", "s-24", "s-25"])) return "rocket";
  if (
    hasAnyTerm(text, [
      "bomba",
      "bomb",
      "jdam",
      "gbu",
      "paveway",
      "aasm",
      "spice",
      "kab",
      "fab",
      "mk-",
      "sdb",
      "cbu",
      "b61",
      "dws",
      "saaw",
      "hakim",
      "hgk",
      "kgk",
      "lgk",
      "teber",
      "ls-6",
    ])
  ) {
    return "bomb";
  }
  if (
    hasAnyTerm(text, [
      "stand-off",
      "standoff",
      "seyir",
      "cruise",
      "anti-radyasyon",
      "anti-gemi",
      "sead",
      "dead",
      "jassm",
      "jsow",
      "harm",
      "aargm",
      "harpoon",
      "lrasm",
      "slam",
      "storm shadow",
      "scalp",
      "taurus",
      "brimstone",
      "exocet",
      "rbs",
      "kh-",
      "agm-65",
      "agm-84",
      "agm-88",
      "brahmos",
      "rudram",
      "som",
      "yj-",
      "kd-",
      "cm-400",
      "akf-98",
    ])
  ) {
    return "standoff";
  }
  if (
    categoryTitle === "Hava-hava" ||
    hasAnyTerm(text, [
      "hava-hava",
      "air-to-air",
      "aam",
      "aim-",
      "amraam",
      "sidewinder",
      "meteor",
      "asraam",
      "iris",
      "mica",
      "magic",
      "super 530",
      "pl-",
      "r-",
      "rvv",
      "k-74",
      "k-77",
      "phoenix",
      "sparrow",
      "derby",
      "python",
      "astra",
      "gokdogan",
      "bozdogan",
    ])
  ) {
    return "air";
  }

  return "strike";
}

function hasAnyTerm(text, terms) {
  return terms.some((term) => text.includes(normalize(term)));
}

function getMunitionConfidence(munitionName, categoryTitle, detail) {
  const text = normalize(`${munitionName} ${categoryTitle} ${detail.note} ${detail.description}`);
  if (hasAnyTerm(text, ["plan", "gelecek", "olasi", "secil", "bagimli", "sinirli", "hedeflen", "tedarik"])) {
    return { level: "conditional", label: "Koşullu uyum" };
  }
  if (hasAnyTerm(text, ["tarihsel", "eski", "emekli", "klasik"])) {
    return { level: "legacy", label: "Tarihsel/legacy" };
  }
  return { level: "active", label: "Açık kaynak uyumlu" };
}

function clearMunitionDetail() {
  elements.munitionDetailImage.removeAttribute("src");
  elements.munitionImageCredit.classList.add("hidden");
  elements.munitionDetailCategory.textContent = t("munitionDetailCard");
  delete elements.munitionDetailCategory.dataset.confidence;
  elements.munitionDetailName.textContent = t("munitionNotSelected");
  elements.munitionDetailDescription.textContent = isEnglish()
    ? "No record is available for the selected filter."
    : "Seçili filtrede gösterilecek kayıt bulunamadı.";
  elements.munitionDetailRole.textContent = "-";
  elements.munitionDetailGuidance.textContent = "-";
  elements.munitionDetailOrigin.textContent = "-";
  elements.munitionDetailNote.textContent = "-";
}

function getMunitionDetail(munitionName, categoryTitle = "") {
  const searchText = normalize(`${munitionName} ${categoryTitle}`);
  const known = munitionKnowledge.find((item) => item.terms.some((term) => searchText.includes(normalize(term))));
  const inferred = known || inferMunitionDetail(munitionName, categoryTitle);
  const photo = getMunitionPhoto(searchText);

  return {
    ...inferred,
    name: munitionName,
    note: known
      ? "Bilgi kartı genel mühimmat ailesini açıklar; uçak/ülke/blok entegrasyonu ayrıca değişebilir."
      : inferred.note,
    photo,
    visualLabel: formatMunitionVisualLabel(inferred.visual),
  };
}

function getMunitionPhoto(searchText) {
  const photo = munitionPhotoCatalog.find((item) => item.terms.some((term) => searchText.includes(normalize(term))));
  if (!photo) return null;

  const localFileName = munitionLocalFileName(photo.file);
  const localImages = window.MUNITION_LOCAL_IMAGES || [];
  const hasLocalImage = localImages.includes(localFileName);

  return {
    file: photo.file,
    localImage: hasLocalImage ? `assets/munitions/${localFileName}` : "",
    remoteImage: commonsFile(photo.file),
    source: commonsPage(photo.file),
  };
}

function inferMunitionDetail(munitionName, categoryTitle) {
  const text = normalize(`${munitionName} ${categoryTitle}`);
  const isGun = text.includes("top") || text.includes("cannon") || text.includes("gau") || text.includes("gsh");
  const isPod = text.includes("pod") || text.includes("hedefleme") || text.includes("yakit") || text.includes("gorev yuk");
  const isRocket = text.includes("roket") || text.includes("hydra") || text.includes("apkws") || text.includes("s-8");
  const isBomb =
    text.includes("bomba") ||
    text.includes("bomb") ||
    text.includes("gbu") ||
    text.includes("jdam") ||
    text.includes("paveway") ||
    text.includes("kab") ||
    text.includes("fab") ||
    text.includes("mk-") ||
    text.includes("sdb") ||
    text.includes("spice") ||
    text.includes("aasm") ||
    text.includes("cbu");

  if (isGun) {
    return {
      terms: [],
      name: munitionName,
      role: "Sabit uçak silahı",
      guidance: "Balistik",
      origin: "Platforma göre değişir",
      visual: "gun",
      description: `${munitionName}, uçak üzerinde taşınan veya entegre edilen top/silah katmanını temsil eder.`,
      note: "Kalibre, mühimmat tipi ve kullanım biçimi platforma göre değişir.",
    };
  }

  if (isPod) {
    return {
      terms: [],
      name: munitionName,
      role: "Görev destek yükü",
      guidance: "Sensör/elektronik sistem",
      origin: "Platforma göre değişir",
      visual: "pod",
      description: `${munitionName}, doğrudan mühimmat olmayabilir; hedefleme, keşif, elektronik harp veya görev destek yükü olarak okunmalıdır.`,
      note: "Bu tür yükler mühimmat etkisini destekleyen sensör veya görev ekipmanı olabilir.",
    };
  }

  if (isRocket) {
    return {
      terms: [],
      name: munitionName,
      role: "Roket ailesi",
    guidance: text.includes("gudumlu") || text.includes("apkws") ? "Lazer kitli veya varyant bağımlı" : "Genellikle güdümsüz",
      origin: "Platforma göre değişir",
      visual: "rocket",
      description: `${munitionName}, yakın destek veya hafif taarruz görevleriyle ilişkili roket sınıfı mühimmattır.`,
      note: "Roket ailesi ve pod konfigürasyonu kullanıcı ülkeye göre değişebilir.",
    };
  }

  if (isBomb) {
    return {
      terms: [],
      name: munitionName,
      role: "Hava-yer bomba sınıfı",
      guidance: text.includes("lazer") ? "Lazer güdümü" : text.includes("gps") || text.includes("jdam") ? "GPS/INS" : "Varyant/kit bağımlı",
      origin: "Platforma göre değişir",
      visual: "bomb",
      description: `${munitionName}, kara veya deniz hedeflerine karşı kullanılan bomba/güdüm kiti ailesi içinde değerlendirilir.`,
      note: "Güdüm kiti, harp başlığı ve entegrasyon kullanıcı ülkeye göre farklılaşabilir.",
    };
  }

  return {
    terms: [],
    name: munitionName,
    role: categoryTitle || "Taktik mühimmat",
    guidance: "Varyant bağımlı",
    origin: "Açık kaynakta değişken",
    visual: "missile",
    description: `${munitionName}, açık kaynak envanterlerde adı geçen bir mühimmat ailesidir. Platforma göre rol ve entegrasyon seviyesi değişebilir.`,
    note: "Bu kart teknik genel bakış içindir; taktik kullanım talimatı içermez.",
  };
}

function formatMunitionVisualLabel(type) {
  return {
    missile: "Füze",
    bomb: "Bomba",
    rocket: "Roket",
    gun: "Top",
    pod: "Görev podu",
  }[type] || "Mühimmat";
}

function createMunitionVisual(detail) {
  const visualType = detail.visual || "missile";
  const palette = {
    missile: ["#62dcff", "#fff1b8", "#9af6b0"],
    bomb: ["#f0bd60", "#62dcff", "#dceff0"],
    rocket: ["#ff8c5a", "#fff1b8", "#62dcff"],
    gun: ["#a7ffba", "#62dcff", "#dceff0"],
    pod: ["#8ab6ff", "#fff1b8", "#a7ffba"],
  }[visualType] || ["#62dcff", "#fff1b8", "#dceff0"];

  const shape = {
    missile: `
      <path d="M33 102 L188 76 L224 94 L188 112 Z" fill="${palette[0]}" opacity=".88"/>
      <path d="M188 76 L246 94 L188 112 Z" fill="${palette[1]}"/>
      <path d="M56 97 L20 78 L43 106 Z" fill="${palette[2]}" opacity=".8"/>
      <path d="M78 96 L62 65 L106 92 Z" fill="${palette[1]}" opacity=".72"/>
      <path d="M78 101 L62 134 L106 106 Z" fill="${palette[1]}" opacity=".72"/>
    `,
    bomb: `
      <path d="M76 62 C118 34 188 52 213 94 C188 136 118 154 76 126 C48 107 48 81 76 62 Z" fill="${palette[0]}" opacity=".9"/>
      <path d="M205 82 L245 94 L205 106 Z" fill="${palette[1]}"/>
      <path d="M66 76 L24 54 L46 92 Z" fill="${palette[2]}" opacity=".78"/>
      <path d="M66 120 L24 142 L46 104 Z" fill="${palette[2]}" opacity=".78"/>
    `,
    rocket: `
      <path d="M48 102 L176 74 L222 94 L176 122 Z" fill="${palette[0]}" opacity=".9"/>
      <path d="M222 94 L248 94" stroke="${palette[1]}" stroke-width="8" stroke-linecap="round"/>
      <path d="M52 100 L22 88 L42 110 Z" fill="${palette[1]}" opacity=".78"/>
      <path d="M32 102 C18 96 14 89 10 82 C25 84 35 90 45 99 Z" fill="#ff4d69" opacity=".88"/>
    `,
    gun: `
      <rect x="48" y="82" width="142" height="34" rx="8" fill="${palette[0]}" opacity=".86"/>
      <rect x="178" y="91" width="70" height="12" rx="6" fill="${palette[1]}"/>
      <rect x="76" y="116" width="36" height="42" rx="7" fill="${palette[2]}" opacity=".72"/>
      <circle cx="68" cy="99" r="15" fill="#050a0a" stroke="${palette[1]}" stroke-width="4"/>
    `,
    pod: `
      <rect x="46" y="72" width="168" height="58" rx="28" fill="${palette[0]}" opacity=".82"/>
      <circle cx="188" cy="101" r="21" fill="#050a0a" stroke="${palette[1]}" stroke-width="5"/>
      <rect x="88" y="54" width="62" height="24" rx="9" fill="${palette[2]}" opacity=".62"/>
      <path d="M58 128 L38 154 L96 132 Z" fill="${palette[1]}" opacity=".65"/>
    `,
  }[visualType];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" role="img" aria-label="${escapeHtml(detail.name)} temsili mühimmat görseli">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#0d1817"/>
          <stop offset="1" stop-color="#050a0a"/>
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="280" height="180" fill="url(#bg)"/>
      <path d="M16 28 H264 M16 152 H264" stroke="${palette[0]}" stroke-opacity=".22"/>
      <path d="M26 22 V158 M254 22 V158" stroke="${palette[1]}" stroke-opacity=".16"/>
      <g filter="url(#glow)">${shape}</g>
      <text x="18" y="166" fill="${palette[1]}" font-size="12" font-family="Segoe UI, Arial" font-weight="700">${escapeSvgText(formatMunitionVisualLabel(visualType).toLocaleUpperCase("tr-TR"))} / TEMSİLİ GÖRSEL</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderSpecGrid(targetElement, selectedAircraft) {
  const specs = [
    [isEnglish() ? "Max speed" : "Azami hız", selectedAircraft.speed],
    [isEnglish() ? "Range" : "Menzil", selectedAircraft.range],
    [isEnglish() ? "Ceiling" : "Tavan", selectedAircraft.ceiling],
    [isEnglish() ? "Crew" : "Mürettebat", selectedAircraft.crew],
  ];

  targetElement.innerHTML = specs
    .map(
      ([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderCapabilityRow(targetElement, selectedAircraft) {
  targetElement.innerHTML = selectedAircraft.tags.map((tag) => `<span class="capability-pill">${escapeHtml(aircraftTagText(tag))}</span>`).join("");
}

function renderAircraftCapabilityBars(targetElement, selectedAircraft, aircraftProfile = null) {
  targetElement.innerHTML = calculateContextualAircraftSignals(selectedAircraft, aircraftProfile)
    .map(
      ([label, value]) => `
        <div class="inspect-signal-row">
          <span>${escapeHtml(signalDisplayLabel(label))}</span>
          <i><b style="width:${value}%"></b></i>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function calculateAircraftSignals(selectedAircraft) {
  const text = normalize(`${selectedAircraft.name} ${selectedAircraft.role} ${selectedAircraft.tags.join(" ")}`);
  const score = (terms, base, step) =>
    Math.min(
      96,
      base + terms.reduce((total, term) => total + (text.includes(normalize(term)) ? step : 0), 0),
    );

  return [
    ["Hava-hava", score(["hava üstünlüğü", "hava-hava", "av", "interceptor", "ağır av"], 32, 13)],
    ["Taarruz", score(["taarruz", "bombardıman", "yakın destek", "çok rollü", "sead"], 30, 12)],
    ["Stealth", score(["stealth", "5. nesil", "düşük görünürlük"], 18, 22)],
    ["Deniz", score(["deniz", "uçak gemisi", "stovl", "carrier"], 14, 20)],
    ["Modernlik", score(["4.5", "5. nesil", "modern", "sensör", "aesa"], 42, 11)],
  ];
}

function renderSearchResults() {
  const matching = countries
    .filter((item) => state.filter === "all" || item.alliance === state.filter)
    .filter((item) => {
      if (!state.search) return true;
      return normalize(`${item.name} ${item.englishName} ${item.code} ${item.alliance}`).includes(state.search);
    });

  elements.countryResults.innerHTML = "";

  matching.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `country-result-btn${item.id === state.selectedCountryId ? " active" : ""}`;
    button.textContent = countryDisplayLine(item);
    button.addEventListener("click", () => openCountryIntelPanel(item.id));
    elements.countryResults.append(button);
  });
}

async function renderWorldMap() {
  if (!elements.worldMap || !elements.worldMap.clientWidth) return;

  if (!window.d3 || !window.topojson) {
    renderFallbackMap();
    return;
  }

  const width = elements.worldMap.clientWidth;
  const height = Math.max(elements.worldMap.parentElement.clientHeight, 420);
  const svg = d3.select(elements.worldMap);
  svg.selectAll("*").remove();
  svg.attr("viewBox", `0 0 ${width} ${height}`);
  elements.worldMap.style.display = "block";
  elements.fallbackMap.classList.add("hidden");

  try {
    const world =
      window.WORLD_TOPOJSON ||
      (await fetch(WORLD_TOPOJSON_URL).then((response) => {
        if (!response.ok) throw new Error(isEnglish() ? "Map data could not be loaded" : "Harita verisi alınamadı");
        return response.json();
      }));

    const land = topojson.feature(world, world.objects.countries).features;
    const projection = d3.geoNaturalEarth1().fitExtent(
      [
        [16, 18],
        [width - 16, height - 18],
      ],
      { type: "Sphere" },
    );
    const path = d3.geoPath(projection);
    const viewport = svg.append("g").attr("class", "map-viewport");

    viewport.append("path").datum({ type: "Sphere" }).attr("class", "sphere").attr("d", path);
    viewport.append("path").datum(d3.geoGraticule10()).attr("class", "graticule").attr("d", path);

    viewport
      .append("g")
      .selectAll("path")
      .data(land)
      .join("path")
      .attr("class", (feature) => {
        const mappedCountry = countryFromFeature(feature);
        return `country-path ${allianceClass(mappedCountry)}${isDimmed(mappedCountry) ? " filtered-out" : ""}${
          mappedCountry?.id === state.selectedCountryId ? " active" : ""
        }`;
      })
      .attr("d", path)
      .on("click", (event, feature) => {
        const mappedCountry = countryFromFeature(feature);
        if (mappedCountry) openCountryIntelPanel(mappedCountry.id);
      })
      .append("title")
      .text((feature) => countryDisplayName(countryFromFeature(feature)) || feature.properties?.name || (isEnglish() ? "Country" : "Ülke"));

    const markerGroup = viewport.append("g");
    const markers = markerGroup
      .selectAll("g")
      .data(countries)
      .join("g")
      .attr("class", (item) => `country-marker ${item.alliance.toLowerCase()}${isDimmed(item) ? " filtered-out" : ""}${
        item.id === state.selectedCountryId ? " active" : ""
      }`)
      .attr("transform", (item) => {
        const projected = projection([item.lon, item.lat]) || [0, 0];
        return `translate(${projected[0]}, ${projected[1]})`;
      })
      .on("click", (event, item) => openCountryIntelPanel(item.id));

    markers
      .append("circle")
      .attr("class", "marker-hitbox")
      .attr("r", 8)
      .attr("fill", "transparent");

    markers
      .append("circle")
      .attr("class", "marker-dot")
      .attr("r", 4.8)
      .attr("fill", (item) => (item.alliance === "NATO" ? "var(--nato)" : "var(--brics)"));

    markers
      .append("text")
      .attr("class", "marker-label")
      .attr("x", 8)
      .attr("y", 4)
      .attr("data-short-label", (item) => item.code)
      .attr("data-full-label", (item) => countryDisplayName(item))
      .text((item) => item.code);

    markers.append("title").text((item) => `${countryDisplayName(item)} - ${item.alliance}`);

    const zoomBehavior = d3
      .zoom()
      .scaleExtent([1, 7])
      .extent([
        [0, 0],
        [width, height],
      ])
      .translateExtent([
        [-width * 0.25, -height * 0.25],
        [width * 1.25, height * 1.25],
      ])
      .on("zoom", (event) => {
        viewport.attr("transform", event.transform);
        state.mapZoomTransform = event.transform;
        updateZoomLevel(event.transform.k);
        scheduleMapLabelScale(event.transform.k);
      });

    state.mapZoomBehavior = zoomBehavior;
    svg.call(zoomBehavior);

    if (state.mapZoomTransform) {
      svg.call(zoomBehavior.transform, constrainZoomTransform(state.mapZoomTransform, width, height));
    } else {
      updateZoomLevel(1);
      updateMapLabelScale(1);
    }

    state.mapReady = true;
  } catch (error) {
    renderFallbackMap();
  }
}

function zoomMapBy(factor) {
  if (!window.d3 || !state.mapZoomBehavior || elements.worldMap.style.display === "none") return;

  d3.select(elements.worldMap)
    .transition()
    .duration(getActiveSettings().reducedMotion ? 0 : 180)
    .call(state.mapZoomBehavior.scaleBy, factor);
}

function resetMapZoom() {
  if (!window.d3 || !state.mapZoomBehavior || elements.worldMap.style.display === "none") return;

  d3.select(elements.worldMap)
    .transition()
    .duration(getActiveSettings().reducedMotion ? 0 : 180)
    .call(state.mapZoomBehavior.transform, d3.zoomIdentity);
}

function updateZoomLevel(scale) {
  if (!elements.zoomLevel) return;
  elements.zoomLevel.textContent = `${scale.toFixed(1)}x`;
}

function scheduleMapLabelScale(scale) {
  state.pendingMapLabelScale = scale;
  if (state.mapLabelFrame) return;

  state.mapLabelFrame = window.requestAnimationFrame(() => {
    state.mapLabelFrame = 0;
    updateMapLabelScale(state.pendingMapLabelScale);
  });
}

function updateMapLabelScale(scale) {
  if (!window.d3 || elements.worldMap.style.display === "none") return;

  const safeScale = Math.max(1, scale || 1);
  const targetScreenFontSize = Math.max(8.6, 11.2 / Math.pow(safeScale, 0.68));
  const targetScreenRadius = Math.max(1.95, 4.7 / Math.pow(safeScale, 0.68));
  const targetScreenStroke = Math.max(0.58, 1.3 / Math.pow(safeScale, 0.68));
  const targetScreenOffsetX = Math.max(1.35, 6.4 / Math.pow(safeScale, 0.82));
  const targetScreenOffsetY = Math.max(0.9, 3.2 / Math.pow(safeScale, 0.78));
  const labelFontSize = targetScreenFontSize / safeScale;
  const dotRadius = targetScreenRadius / safeScale;
  const markerStrokeWidth = targetScreenStroke / safeScale;
  const offsetX = targetScreenOffsetX / safeScale;
  const offsetY = targetScreenOffsetY / safeScale;
  const targetScreenTextStroke = Math.max(0.74, Math.min(1.24, targetScreenFontSize * 0.14));
  const strokeWidth = targetScreenTextStroke / safeScale;

  d3.selectAll(".marker-dot").attr("r", dotRadius).style("stroke-width", `${markerStrokeWidth}px`);

  d3.selectAll(".marker-label")
    .text((item) => item.code)
    .attr("x", offsetX)
    .attr("y", offsetY)
    .style("font-size", `${labelFontSize}px`)
    .style("stroke-width", `${strokeWidth}px`);
}

function constrainZoomTransform(transform, width, height) {
  if (!window.d3 || !transform) return transform;

  const scale = Math.min(7, Math.max(1, transform.k || 1));
  if (scale === 1) return d3.zoomIdentity;

  const x = Math.min(width * 0.25, Math.max(-width * (scale - 0.75), transform.x || 0));
  const y = Math.min(height * 0.25, Math.max(-height * (scale - 0.75), transform.y || 0));
  return d3.zoomIdentity.translate(x, y).scale(scale);
}

function renderFallbackMap() {
  elements.worldMap.style.display = "none";
  elements.fallbackMap.classList.remove("hidden");
  elements.fallbackMap.innerHTML = "";
  state.mapZoomBehavior = null;
  state.mapZoomTransform = null;
  updateZoomLevel(1);

  countries.forEach((item) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = `fallback-marker ${item.alliance.toLowerCase()}${item.id === state.selectedCountryId ? " active" : ""}`;
    marker.title = `${countryDisplayName(item)} - ${item.alliance}`;
    marker.style.left = `${((item.lon + 180) / 360) * 100}%`;
    marker.style.top = `${((90 - item.lat) / 180) * 100}%`;
    marker.addEventListener("click", () => openCountryIntelPanel(item.id));
    elements.fallbackMap.append(marker);
  });
}

function updateMapSelection() {
  if (!state.mapReady && !elements.fallbackMap.classList.contains("hidden")) {
    renderFallbackMap();
    return;
  }

  if (window.d3 && elements.worldMap.style.display !== "none") {
    d3.selectAll(".country-path")
      .classed("active", function () {
        const data = d3.select(this).datum();
        return countryFromFeature(data)?.id === state.selectedCountryId;
      })
      .classed("filtered-out", function () {
        const data = d3.select(this).datum();
        return isDimmed(countryFromFeature(data));
      });

    d3.selectAll(".country-marker")
      .classed("active", (item) => item.id === state.selectedCountryId)
      .classed("filtered-out", (item) => isDimmed(item));
  }
}

function updateAiBriefing(forceVariant = false) {
  const selectedCountry = countryById.get(state.selectedCountryId);
  const selectedAircraft = aircraftById.get(state.selectedAircraftId);
  if (!selectedCountry) return;
  const countryAnalysis = buildCountryAnalysis(selectedCountry);

  if (forceVariant) state.activeAiQuestion = "";
  const variants = buildBriefingVariants(selectedCountry, selectedAircraft);
  const index = forceVariant ? Math.floor(Math.random() * variants.length) : 0;
  const operatorPrefix = state.currentUser ? (isEnglish() ? `${state.currentUser.name} session active. ` : `${state.currentUser.name} oturumu aktif. `) : "";

  const questions = buildQuestions(selectedCountry, selectedAircraft);
  if (!questions.includes(state.activeAiQuestion)) state.activeAiQuestion = "";

  elements.aiBriefing.textContent = state.activeAiQuestion
    ? `${operatorPrefix}${answerAiQuestion(state.activeAiQuestion, selectedCountry, selectedAircraft)}`
    : `${operatorPrefix}${variants[index]}`;
  elements.countryAiSummary.textContent = buildCountryAiSummary(countryAnalysis);

  elements.aiQuestions.innerHTML = questions
    .map(
      (question) => `
        <li>
          <button class="ai-question${state.activeAiQuestion === question ? " active" : ""}" type="button" data-ai-question="${escapeHtml(question)}">
            ${escapeHtml(question)}
          </button>
        </li>
      `,
    )
    .join("");

  const signals = calculateSignals(selectedCountry);
  elements.signalBars.innerHTML = signals
    .map(
      ([label, value]) => `
        <div class="signal-row">
          <span>${escapeHtml(signalDisplayLabel(label))}</span>
          <span class="signal-track"><i class="signal-fill" style="width:${value}%"></i></span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function answerActiveAiQuestion() {
  const selectedCountry = countryById.get(state.selectedCountryId);
  const selectedAircraft = aircraftById.get(state.selectedAircraftId);
  if (!selectedCountry || !state.activeAiQuestion) return;

  const operatorPrefix = state.currentUser ? (isEnglish() ? `${state.currentUser.name} session active. ` : `${state.currentUser.name} oturumu aktif. `) : "";
  elements.aiBriefing.textContent = `${operatorPrefix}${answerAiQuestion(
    state.activeAiQuestion,
    selectedCountry,
    selectedAircraft,
  )}`;

  elements.aiQuestions.querySelectorAll("[data-ai-question]").forEach((button) => {
    button.classList.toggle("active", button.dataset.aiQuestion === state.activeAiQuestion);
  });
}

function buildCountryAiSummary(countryAnalysis) {
  const country = countryAnalysis.selectedCountry;
  const modernizationSignal = signalDisplayLabel(countryAnalysis.strongestSignal?.[0] || "Genel");
  return isEnglish()
    ? `AI country reading for ${countryDisplayName(country)}: ${countryAnalysis.role}. Fleet character: ${countryAnalysis.fleetCharacter.toLowerCase()}. Strongest signal is ${modernizationSignal}; modernization direction is ${countryAnalysis.modernization.toLowerCase()}. Uncertainty note: ${countryAnalysis.dependency}`
    : `${country.name} için AI ülke okuması: ${countryAnalysis.role}. Filo karakteri ${countryAnalysis.fleetCharacter.toLowerCase()}. En güçlü sinyal ${modernizationSignal}; modernizasyon yönü ise ${countryAnalysis.modernization.toLowerCase()} Belirsizlik notu: ${countryAnalysis.dependency}`;
}

function answerAiQuestion(question, selectedCountry, selectedAircraft) {
  const questionText = normalize(question);

  if (!selectedAircraft) {
    return isEnglish()
      ? `AI note for ${countryDisplayName(selectedCountry)}: countries without a standing combat jet fleet should separate data gaps from verified absence of capacity. The map can still show the country, while the inventory panel should use a clear status line such as “no active combat jet / allied air policing.”`
      : `${selectedCountry.name} için AI notu: sürekli muharip jet filosu olmayan ülkelerde veri boşluğu ile gerçek kapasite yokluğu ayrı etiketlenmeli. Bu yüzden haritada ülke görünsün, envanter panelinde ise “aktif muharip jet yok / müttefik hava polisliği” gibi net bir durum satırı kullanılmalı.`;
  }

  if (hasAnyTerm(questionText, ["karsi ittifak", "platform"])) {
    const matches = findComparableOppositePlatforms(selectedCountry, selectedAircraft)
      .slice(0, 3)
      .map(({ aircraftItem, countryItem }) => `${aircraftItem.name} (${countryDisplayName(countryItem)})`);
    return matches.length
      ? isEnglish()
        ? `Closest open-source comparison candidates in the opposite alliance for ${selectedAircraft.name}: ${matches.join(", ")}. This is not a tactical scenario; it is a technical reading based on role, generation, sensor/range language and mission type similarity.`
        : `${selectedAircraft.name} için karşı ittifakta en yakın açık kaynak karşılaştırma adayları: ${matches.join(", ")}. Bu eşleşme taktik senaryo değil; rol, nesil, sensör/menzil dili ve görev tipi benzerliğine göre hazırlanmış bir teknik okuma.`
      : isEnglish()
        ? `No clear same-role candidate was found in the opposite alliance for ${selectedAircraft.name}; comparison mode can make that gap visible.`
        : `${selectedAircraft.name} için karşı ittifakta doğrudan aynı rolü temsil eden net bir aday bulunamadı; karşılaştırma modu bu boşluğu görünür kılmak için kullanılabilir.`;
  }

  if (hasAnyTerm(questionText, ["stealth", "menzil", "muhimmat", "kapasite"])) {
    const signals = calculateAircraftSignals(selectedAircraft)
      .slice(0, 4)
      .map(([label, value]) => `${signalDisplayLabel(label)} ${value}`)
      .join(" / ");
    const profile = getMunitionProfile(state.selectedAircraftId, selectedAircraft);
    return isEnglish()
      ? `Reading for ${selectedAircraft.name} in the ${countryDisplayName(selectedCountry)} inventory: ${signals}. The munition panel has ${countMunitions(
          profile,
        )} records; these can vary by country, block and modernization package, so they should be read with the data confidence tag.`
      : `${selectedCountry.name} envanterinde ${selectedAircraft.name} için okuma şu: ${signals}. Mühimmat panelinde ${countMunitions(
          profile,
        )} kayıt var; bu kayıtlar ülke, blok ve modernizasyon paketine göre değişebileceği için veri güven etiketiyle birlikte okunmalı.`;
  }

  if (hasAnyTerm(questionText, ["kaynak", "dogrula", "adet", "teslimat", "modernizasyon"])) {
    return isEnglish()
      ? `Best verification order for ${selectedAircraft.name}: official air force/fact-sheet pages, manufacturer technical summaries, delivery announcements, defense ministry statements and Wikimedia Commons file pages for visuals. Counts and delivery dates change often, so future versions should show them with a separate “last verified” date.`
      : `${selectedAircraft.name} için en sağlıklı doğrulama sırası: resmi hava kuvveti/fact-sheet sayfaları, üretici teknik özetleri, teslimat duyuruları, savunma bakanlığı açıklamaları ve görseller için Wikimedia Commons dosya sayfaları. Adet ve teslimat tarihleri sık değiştiği için bu alanları ileride “son doğrulama tarihi” ile ayrı göstermeliyiz.`;
  }

  return isEnglish()
    ? `AI answer for ${selectedAircraft.name}: open-source data should summarize technical capabilities and mark uncertainty; producing operational or tactical instructions should not be this site's role.`
    : `${selectedAircraft.name} için AI cevabı: açık kaynak veri, teknik kabiliyetleri özetlemek ve belirsizlikleri işaretlemek için kullanılmalı; operasyonel/taktik talimat üretmek bu sitenin rolü olmamalı.`;
}

function findComparableOppositePlatforms(selectedCountry, selectedAircraft) {
  const oppositeAlliance = selectedCountry.alliance === "NATO" ? "BRICS" : "NATO";
  const seen = new Set();
  return countries
    .filter((countryItem) => countryItem.alliance === oppositeAlliance)
    .flatMap((countryItem) =>
      countryItem.aircraft
        .map((aircraftId) => ({ aircraftId, aircraftItem: aircraftById.get(aircraftId), countryItem }))
        .filter(({ aircraftId, aircraftItem }) => aircraftItem && !seen.has(aircraftId) && seen.add(aircraftId)),
    )
    .map((entry) => ({ ...entry, score: scoreComparableAircraft(selectedAircraft, entry.aircraftItem) }))
    .sort((a, b) => b.score - a.score);
}

function scoreComparableAircraft(sourceAircraft, candidateAircraft) {
  const sourceText = normalize(`${sourceAircraft.name} ${sourceAircraft.role} ${sourceAircraft.tags.join(" ")}`);
  const candidateText = normalize(`${candidateAircraft.name} ${candidateAircraft.role} ${candidateAircraft.tags.join(" ")}`);
  const scoreTerms = ["5. nesil", "stealth", "hava ustunlugu", "agir av", "cok rollu", "taarruz", "deniz", "stovl", "yakin destek"];
  return scoreTerms.reduce((score, term) => {
    const normalizedTerm = normalize(term);
    return score + (sourceText.includes(normalizedTerm) && candidateText.includes(normalizedTerm) ? 10 : 0);
  }, 0);
}

function buildBriefingVariants(selectedCountry, selectedAircraft) {
  if (!selectedAircraft) {
    return [
      isEnglish()
        ? `${countryDisplayName(selectedCountry)} has no combat jet card in this prototype. The AI role can organize open-source data, mark gaps and explain which countries do not have a standing combat aircraft fleet.`
        : `${selectedCountry.name} için bu prototipte muharip jet kartı bulunmuyor. AI rolü burada açık kaynak veriyi toparlayan, boşlukları işaretleyen ve hangi ülkede gerçek savaş uçağı filosu olmadığını açıklayan bir asistan olarak çalışabilir.`,
    ];
  }

  const opposite = selectedCountry.alliance === "NATO" ? "BRICS" : "NATO";
  const stealthText = selectedAircraft.tags.some((tag) => normalize(tag).includes("stealth"))
    ? isEnglish()
      ? "low observability and sensor sharing"
      : "düşük görünürlük ve sensör paylaşımı"
    : isEnglish()
      ? "platform maturity, mission diversity and sustainment ecosystem"
      : "platform olgunluğu, görev çeşitliliği ve bakım ekosistemi";

  return [
    isEnglish()
      ? `${countryDisplayName(selectedCountry)} selected. ${selectedAircraft.name} stands out on the ${selectedCountry.alliance} side for ${stealthText}. The AI assistant should support public capability comparison, inventory summaries and source checks rather than tactical instructions.`
      : `${selectedCountry.name} seçildi. ${selectedAircraft.name}, ${selectedCountry.alliance} tarafında ${selectedAircraft.role.toLowerCase()} ${stealthText} açısından öne çıkar. AI asistan bu noktada taktik talimat üretmek yerine kamuya açık kabiliyet karşılaştırması, envanter özetleme ve kaynak kontrolü rolü üstlenebilir.`,
    isEnglish()
      ? `${selectedAircraft.name} is a useful entry point for reading the ${countryFocusText(selectedCountry)} profile of ${countryDisplayName(
          selectedCountry,
        )}. Comparison mode can line up similar ${opposite} roles by technical level, mission type and modernization status.`
      : `${selectedAircraft.name} kartı, ${selectedCountry.name} hava gücünün ${selectedCountry.focus.toLowerCase()} başlığını okumak için iyi bir başlangıç. Karşılaştırma modunda aynı rolün ${opposite} tarafındaki karşılıklarını teknik seviye, görev tipi ve modernizasyon durumu üzerinden yan yana getirebiliriz.`,
    isEnglish()
      ? `The most useful AI role in this console is to summarize distributed open-source data and clearly label uncertainty. Speed, range and mission role are shown for ${selectedAircraft.name}; count data should be connected to a separate verification layer.`
      : `Bu konsolda AI'nin en yararlı rolü, dağınık açık kaynak veriyi Türkçe özetleyip belirsizlikleri açıkça etiketlemek olur. ${selectedAircraft.name} için hız, menzil ve görev rolü gösteriliyor; adet verisi ise değişken olduğu için ayrı bir doğrulama katmanına bağlanmalı.`,
  ];
}

function buildQuestions(selectedCountry, selectedAircraft) {
  if (!selectedAircraft) {
    return [
      isEnglish()
        ? `Why does ${countryDisplayName(selectedCountry)} use allied air policing instead of its own combat jet fleet?`
        : `${selectedCountry.name} neden kendi muharip jet filosu yerine müttefik hava polisliği kullanıyor?`,
      isEnglish()
        ? "How should NATO countries without a combat jet fleet be marked on the map?"
        : "Haritada savaş uçağı filosu olmayan NATO ülkeleri nasıl işaretlenmeli?",
      isEnglish()
        ? "How should AI separate empty data from verified absence?"
        : "AI boş veri ile doğrulanmış yokluk bilgisini nasıl ayırmalı?",
    ];
  }

  return [
    isEnglish()
      ? `Which opposite-alliance platforms share the same role as ${selectedAircraft.name}?`
      : `${selectedAircraft.name} ile aynı roldeki karşı ittifak platformları hangileri?`,
    isEnglish()
      ? `How does stealth, range and munition capacity balance look in the ${countryDisplayName(selectedCountry)} inventory?`
      : `${selectedCountry.name} envanterinde stealth, menzil ve mühimmat kapasitesi dengesi nasıl görünüyor?`,
    isEnglish()
      ? "Which sources should verify counts, modernization block and delivery dates for this aircraft?"
      : "Bu uçak için adet, modernizasyon bloğu ve teslimat tarihi verilerini hangi kaynaklardan doğrulayalım?",
  ];
}

function calculateSignals(selectedCountry) {
  const jets = selectedCountry.aircraft.map((id) => aircraftById.get(id)).filter(Boolean);
  const score = (matcher, base = 18, step = 18) =>
    Math.min(96, base + jets.filter((item) => item.tags.some((tag) => matcher(normalize(tag)))).length * step);

  return [
    ["Hava-hava", score((tag) => tag.includes("hava") || tag.includes("av") || tag.includes("interceptor"), 22, 16)],
    ["Taarruz", score((tag) => tag.includes("taarruz") || tag.includes("cok rollu"), 20, 14)],
    ["Stealth", score((tag) => tag.includes("stealth") || tag.includes("5. nesil"), 12, 22)],
    ["Deniz", score((tag) => tag.includes("deniz") || tag.includes("stovl"), 10, 20)],
    ["Modernlik", Math.min(98, 24 + jets.length * 7 + score((tag) => tag.includes("4.5") || tag.includes("5."), 0, 9))],
  ];
}

function countryFromFeature(feature) {
  const featureName = feature?.properties?.name;
  if (!featureName) return null;
  return countries.find((item) => item.geoNames.some((name) => normalize(name) === normalize(featureName))) || null;
}

function allianceClass(mappedCountry) {
  if (!mappedCountry) return "";
  return mappedCountry.alliance === "NATO" ? "nato" : "brics";
}

function isDimmed(item) {
  if (!item) return state.filter !== "all" || Boolean(state.search);
  const filterMismatch = state.filter !== "all" && item.alliance !== state.filter;
  const searchMismatch =
    Boolean(state.search) && !normalize(`${item.name} ${item.englishName} ${item.code} ${item.alliance}`).includes(state.search);
  return filterMismatch || searchMismatch;
}

function prepareImage(imageElement, item, onFinalError = null) {
  if (!imageElement || !item) return;
  imageElement.dataset.stage = item.image === item.localImage ? "local" : "remote";
  imageElement.dataset.remote = item.remoteImage || "";
  imageElement.dataset.backup = item.backupImage || "";
  if (onFinalError) {
    imageElement.addEventListener("error", () => handleImageError(imageElement, onFinalError));
  }
}

function handleImageError(imageElement, onFinalError = null) {
  const stage = imageElement.dataset.stage;
  if (stage === "local" && imageElement.dataset.remote) {
    imageElement.dataset.stage = "remote";
    imageElement.src = imageElement.dataset.remote;
    return;
  }

  if (stage !== "backup" && imageElement.dataset.backup) {
    imageElement.dataset.stage = "backup";
    imageElement.src = imageElement.dataset.backup;
    return;
  }

  if (onFinalError) onFinalError();
}

function jet(config) {
  return {
    ...config,
    image: commonsFile(config.file),
    source: commonsPage(config.file),
  };
}

function country(id, name, englishName, code, alliance, lat, lon, config) {
  return {
    id,
    name,
    englishName,
    code,
    alliance,
    lat,
    lon,
    geoNames: config.geoNames || [englishName],
    command: config.command,
    focus: config.focus,
    description: config.description,
    aircraft: config.aircraft,
  };
}

function munitions(summary, categories, caveat = "Kullanıcı ülke, blok ve modernizasyon paketine göre değişir.") {
  return { summary, categories, caveat };
}

function mcat(title, items) {
  return { title, items };
}

function mdetail(terms, name, role, guidance, origin, visual, description) {
  return { terms, name, role, guidance, origin, visual, description };
}

function mphoto(terms, file) {
  return { terms, file };
}

function munitionLocalFileName(fileName) {
  const extensionMatch = String(fileName).match(/\.(jpe?g|png|webp)$/i);
  const extension = extensionMatch ? extensionMatch[0].toLowerCase().replace(".jpeg", ".jpg") : ".jpg";
  const stem = String(fileName).replace(/\.[^.]+$/, "");
  const safeStem =
    normalize(stem)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 110) || "munition";
  return `${safeStem}${extension}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeSvgText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalize(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}
