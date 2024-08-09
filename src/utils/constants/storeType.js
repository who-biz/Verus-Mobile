// Updates
export const SET_COIN_UPDATE_DATA = 'SET_COIN_UPDATE_DATA';
export const SET_SERVICE_UPDATE_DATA = 'SET_SERVICE_UPDATE_DATA'
export const EXPIRE_COIN_DATA = 'EXPIRE_COIN_DATA';
export const RENEW_COIN_DATA = 'RENEW_COIN_DATA';
export const EXPIRE_SERVICE_DATA = 'EXPIRE_SERVICE_DATA';
export const RENEW_SERVICE_DATA = 'RENEW_SERVICE_DATA';
export const SET_COIN_EXPIRE_ID = 'SET_COIN_EXPIRE_ID';
export const SET_COIN_UPDATE_EXPIRED_ID = 'SET_COIN_UPDATE_EXPIRED_ID';
export const CLEAR_COIN_EXPIRE_ID = 'CLEAR_COIN_EXPIRE_ID';
export const CLEAR_COIN_UPDATE_EXPIRED_ID = 'CLEAR_COIN_UPDATE_EXPIRED_ID';
export const SET_SERVICE_EXPIRE_ID = 'SET_SERVICE_EXPIRE_ID';
export const SET_SERVICE_UPDATE_EXPIRED_ID = 'SET_SERVICE_UPDATE_EXPIRED_ID';
export const CLEAR_SERVICE_EXPIRE_ID = 'CLEAR_SERVICE_EXPIRE_ID';
export const CLEAR_SERVICE_UPDATE_EXPIRED_ID = 'CLEAR_SERVICE_UPDATE_EXPIRED_ID';
// export const FREE_COIN_API_CALL = "FREE_COIN_API_CALL"
export const OCCUPY_COIN_API_CALL = 'OCCUPY_COIN_API_CALL';
export const OCCUPY_SERVICE_API_CALL = 'OCCUPY_SERVICE_API_CALL'
export const NEEDS_UPDATE_POSTFIX = '_NEED_UPDATE';
export const ENABLE_COIN_API_CALL = 'ENABLE_COIN_API_CALL';
export const DISABLE_COIN_API_CALL = 'DISABLE_COIN_API_CALL';

// Authentication
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const DISABLE_SELECT_DEFAULT_ACCOUNT = 'DISABLE_SELECT_DEFAULT_ACCOUNT';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UPDATE_SESSION_KEY = 'UPDATE_SESSION_KEY';
export const UPDATE_ACCOUNT_KEYS = 'UPDATE_ACCOUNT_KEYS';
export const SET_ADDRESSES = 'SET_ADDRESSES';
export const BIOMETRIC_AUTH = 'BIOMETRIC_AUTH';
export const UPDATE_ACCOUNT_DISABLED_SERVICES = 'UPDATE_ACCOUNT_DISABLED_SERVICES';
export const UPDATE_ACCOUNT_TESTNET_OVERRIDES = 'UPDATE_ACCOUNT_TESTNET_OVERRIDES';
export const UPDATE_ACCOUNT_TESTNET_OVERRIDES_COMPLETE = 'UPDATE_ACCOUNT_TESTNET_OVERRIDES_COMPLETE';
export const SET_LEGACY_KEY_DERIVATION = 'SET_LEGACY_KEY_DERIVATION';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_COMPLETE = 'SIGN_OUT_COMPLETE';

// Crypto buy/sell
export const SET_ACTIVE_SECTION_BUY_SELL_CRYPTO = 'SET_ACTIVE_SECTION_BUY_SELL_CRYPTO';

// Coins
export const SET_ACTIVE_COIN = 'SET_ACTIVE_COIN';
export const SET_ACTIVE_APP = 'SET_ACTIVE_APP';
export const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';
export const SET_COINMENU_FOCUS = 'SET_COINMENU_FOCUS';
export const SET_USER_COINS = 'SET_USER_COINS';
export const SET_USER_COINS_COMPLETE = 'SET_USER_COINS_COMPLETE';
export const SET_COIN_STATUS = 'SET_COIN_STATUS';
export const DISABLE_CLAIM_BUTTON = 'DISABLE_CLAIM_BUTTON'

// Custom Coins
export const SET_ACTIVE_SECTION_CUSTOM_COIN = 'SET_ACTIVE_SECTION_CUSTOM_COIN';

// Coin Information Ledger
export const SET_BALANCES = 'SET_BALANCES';
export const SET_INFO = 'SET_INFO';
export const SET_CONVERSION_PATHS = 'SET_CONVERSION_PATHS';
export const SET_WITHDRAW_DESTINATIONS = 'SET_WITHDRAW_DESTINATIONS';
export const SET_DEPOSIT_SOURCES = 'SET_DEPOSIT_SOURCES';
export const SET_PENDING_DEPOSITS = 'SET_PENDING_DEPOSITS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_ONE_BALANCE = 'SET_ONE_BALANCE';
export const SET_RATES = 'SET_RATES';
export const SET_LINKED_IDENTITIES = 'SET_LINKED_IDENTITIES';
export const BALANCES_NEED_UPDATE = 'BALANCES_NEED_UPDATE';
export const TRANSACTIONS_NEED_UPDATE = 'TRANSACTIONS_NEED_UPDATE';
export const RATES_NEED_UPDATE = 'RATES_NEED_UPDATE';
export const EVERYTHING_NEEDS_UPDATE = 'EVERYTHING_NEEDS_UPDATE';
export const SET_BALANCE_SHOW = "SET_BALANCE_SHOW"
// export const SET_INTERVAL_ID = "SET_INTERVAL_ID"
export const LOG_NEW_CHANNELS = 'LOG_NEW_CHANNELS'

// Service Information Ledger
export const SET_SERVICE_ACCOUNT = 'SET_SERVICE_ACCOUNT'
export const SET_SERVICE_LOADING = 'SET_SERVICE_LOADING'
export const SET_SERVICE_PAYMENT_METHODS = 'SET_SERVICE_PAYMENT_METHODS'
export const SET_SERVICE_TRANSFERS = 'SET_SERVICE_TRANSFERS'
export const SET_SERVICE_RATES = 'SET_SERVICE_RATES'
export const SET_SERVICE_NOTIFICATIONS = 'SET_SERVICE_NOTIFICATIONS'

// Payment Methods
export const CREATE_WYRE_ACCOUNT = 'CREATE_WYRE_ACCOUNT';
export const CREATE_WYRE_ACCOUNT_RESPONSE = 'CREATE_WYRE_ACCOUNT_RESPONSE';
export const GET_WYRE_ACCOUNT = 'GET_WYRE_ACCOUNT';
export const GET_WYRE_ACCOUNT_RESPONSE = 'GET_WYRE_ACCOUNT_RESPONSE';
export const PUT_WYRE_ACCOUNT = 'PUT_WYRE_ACCOUNT';
export const PUT_WYRE_ACCOUNT_RESPONSE = 'PUT_WYRE_ACCOUNT_RESPONSE';
export const GET_WYRE_CONFIG = 'GET_WYRE_CONFIG';
export const GET_WYRE_CONFIG_RESPONSE = 'GET_WYRE_CONFIG_RESPONSE';
export const CREATE_WYRE_PAYMENT = 'CREATE_WYRE_PAYMENT';
export const CREATE_WYRE_PAYMENT_RESPONSE = 'CREATE_WYRE_PAYMENT_RESPONSE';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const GET_EXCHANGE_RATES_RESPONSE = 'GET_EXCHANGE_RATES_RESPONSE';
export const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY';
export const GET_TRANSACTION_HISTORY_RESPONSE = 'GET_TRANSACTION_HISTORY_RESPONSE';

// Settings
export const SET_COIN_LIST = 'SET_COIN_LIST';
export const SET_ALL_SETTINGS = 'SET_ALL_SETTINGS';
export const SET_CONFIG_SECTION = 'SET_CONFIG_SECTION';
export const SET_GENERAL_WALLET_SETTINGS_STATE = 'SET_GENERAL_WALLET_SETTINGS_STATE';
export const SET_COIN_SETTINGS_STATE = 'SET_COIN_SETTINGS_STATE';
export const SET_BUY_SELL_SETTINGS_STATE = 'SET_BUY_SELL_SETTINGS_STATE';

// Cache general
export const CLEAR_CACHE = 'CLEAR_CACHE';

// Electrum data cache
export const ADD_SERVER_VERSION = 'ADD_SERVER_VERSION';
export const SET_SERVER_VERSIONS = 'SET_SERVER_VERSIONS';
export const ADD_GOOD_SERVER = 'ADD_GOOD_SERVER';
export const ADD_BAD_SERVER = 'ADD_BAD_SERVER';

// Block header cache
export const ADD_HEADER = 'ADD_HEADER';
export const SET_HEADERS = 'SET_HEADERS';

// ETH Tx Receipt Cache
export const ADD_ETH_TX_RECEIPT = 'ADD_ETH_TX_RECEIPT';
export const SET_ETH_TX_RECEIPTS = 'SET_ETH_TX_RECEIPTS';

// Data updates
export const SET_COIN_BALANCES = 'SET_COIN_BALANCES';

// Data errors
export const ERROR_BALANCES = 'ERROR_BALANCES';
export const ERROR_TRANSACTIONS = 'ERROR_TRANSACTIONS';
export const ERROR_INFO = 'ERROR_INFO';
export const ERROR_CONVERSION_PATHS = 'ERROR_CONVERSION_PATHS';
export const ERROR_WITHDRAW_DESTINATIONS = 'ERROR_WITHDRAW_DESTINATIONS';
export const ERROR_DEPOSIT_SOURCES = 'ERROR_DEPOSIT_SOURCES';
export const ERROR_PENDING_DEPOSITS = 'ERROR_PENDING_DEPOSITS';
export const ERROR_RATES = 'ERROR_RATES';
export const ERROR_DLIGHT_INIT = 'ERROR_DLIGHT_INIT';
export const ERROR_ELECTRUM_INIT = 'ERROR_ELECTRUM_INIT';
export const ERROR_ERC20_INIT = 'ERROR_ERC20_INIT';
export const ERROR_ETH_INIT = 'ERROR_ETH_INIT';
export const ERROR_LINKED_IDENTITIES = 'ERROR_LINKED_IDENTITIES';

// Service data errors
export const ERROR_SERVICE_ACCOUNT = 'ERROR_SERVICE_ACCOUNT'
export const ERROR_SERVICE_PAYMENT_METHODS = 'ERROR_SERVICE_PAYMENT_METHODS'
export const ERROR_SERVICE_TRANSFERS = 'ERROR_SERVICE_TRANSFERS'
export const ERROR_SERVICE_RATES = 'ERROR_SERVICE_RATES'
export const ERROR_SERVICE_NOTIFICATIONS = 'ERROR_SERVICE_NOTIFICATIONS'

// Overview Screen GUI state
export const SET_OVERVIEW_FILTER = 'SET_OVERVIEW_FILTER';

// Coin Menus Screens GUI state
export const SET_COIN_SUB_WALLET = 'SET_COIN_SUB_WALLET'

// Identity app
export const APP_SETUP = 'APP_SETUP';
export const REQUEST_SEED_DATA = 'REQUEST_SEED_DATA';
export const SET_ACTIVE_IDENTITY = 'SET_ACTIVE_IDENTITY';
export const SET_IDENTITIES = 'SET_IDENTITIES';
export const GET_ACTIVE_IDENTITY = 'GET_ACTIVE_IDENTITY';
export const STORE_IDENTITIES = 'STORE_IDENTITIES';
export const SET_CLAIMS = 'SET_CLAIMS';
export const SET_CLAIM_CATEGORIES = 'SET_CLAIM_CATEGORIES';
export const SET_ATTESTATIONS = 'SET_ATTESTATIONS';
export const SET_ACTIVE_CLAIM_CATEGORY_ID = 'SET_ACTIVE_CLAIM_CATEGORY_ID';
export const TOGGLE_ATTESTATION_PIN = 'TOGGLE_ATTESTATION_PIN';
export const SET_ATTESTATION_PINNED = 'SET_ATTESTATION_PINNED';
export const SET_ACTIVE_CLAIM = 'SET_ACTIVE_CLAIM';
export const SET_ACTIVE_ATTESTATION_ID = 'SET_ACTIVE_ATTESTATION_ID';
export const ADD_NEW_IDENTITY_NAME = 'ADD_NEW_IDENTITY_NAME';
export const ADD_NEW_IDENTITY = 'ADD_NEW_IDENTITY';
export const CHANGE_ACTIVE_IDENTITY = 'CHANGE_ACTIVE_IDENTITY';
export const DESELECT_ACTIVE_IDENTITY = 'DESELECT_ACTIVE_IDENTITY';
export const SET_NEW_ACTIVE_IDENTITY = 'SET_NEW_ACTIVE_IDENTITY';
export const SET_SHOW_EMPTY_CLAIM_CATEGORIES = 'SET_SHOW_EMPTY_CLAIM_CATEGORIES';
export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const SET_NEW_CATEGORY = 'SET_NEW_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SET_CATEGORY_SORT_DIRECTION = 'SET_CATEGORY_SORT_DIRECTION';
export const SET_CLAIMS_SORT_DIRECTION = 'SET_CLAIMS_SORT_DIRECTION';
export const SET_CLAIM_VISIBILITY = 'SET_CLAIM_VISIBILITY';
export const TOGGLE_SHOW_HIDDEN_CLAIMS = 'TOGGLE_SHOW_HIDDEN_CLAIMS';
export const UPDATE_SELECTED_CLAIMS = 'UPDATE_SELECTED_CLAIMS';
export const UPDATE_CATEGORY_FOR_CLAIMS = 'UPDATE_CATEGORY_FOR_CLAIMS';
export const MOVE_CLAIMS_TO_CATEGORY = 'MOVE_CLAIMS_TO_CATEGORY';
export const CLEAR_SELECTED_CLAIMS = 'CLEAR_SELECTED_CLAIMS';
export const SET_ATTESTATION_MODAL_VISIBILITY = 'SET_ATTESTATION_MODAL_VISIBILITY';
export const SET_SCANINFO_MODAL_VISIBILITY = 'SET_SCANINFO_MODAL_VISIBILITY';
export const SET_TOAST_MESSAGE = 'SET_TOAST_MESSAGE';
export const HIDE_SELECTED_CLAIMS = 'HIDE_SELECTED_CLAIMS';
export const SET_HIDE_SELECTED_CLAIMS = 'SET_HIDE_SELECTED_CLAIMS;';
export const SET_MEMO_DATA_FROM_TX = 'SET_MEMO_DATA_FROM_TX';

/* Channel Stores */

// Dlight
export const OPEN_DLIGHT_SOCKET = 'OPEN_DLIGHT_SOCKET';
export const CLOSE_DLIGHT_SOCKET = 'CLOSE_DLIGHT_SOCKET';
export const INIT_DLIGHT_CHANNEL_START = 'INIT_DLIGHT_CHANNEL_START';
export const INIT_DLIGHT_CHANNEL_FINISH = 'INIT_DLIGHT_CHANNEL_FINISH'
export const START_DLIGHT_SYNC = 'START_DLIGHT_SYNC';
export const STOP_DLIGHT_SYNC = 'STOP_DLIGHT_SYNC';
export const CLOSE_DLIGHT_CHANNEL = 'CLOSE_DLIGHT_CHANNEL';

// Electrum
export const INIT_ELECTRUM_CHANNEL_START = 'INIT_ELECTRUM_CHANNEL_START';
export const INIT_ELECTRUM_CHANNEL_FINISH = 'INIT_ELECTRUM_CHANNEL_FINISH'
export const CLOSE_ELECTRUM_CHANNEL = 'CLOSE_ELECTRUM_CHANNEL';

// Eth
export const INIT_ETH_CHANNEL_START = 'INIT_ETH_CHANNEL_START';
export const INIT_ETH_CHANNEL_FINISH = 'INIT_ETH_CHANNEL_FINISH'
export const CLOSE_ETH_CHANNEL = 'CLOSE_ETH_CHANNEL';

// ERC20
export const INIT_ERC20_CHANNEL_START = 'INIT_ERC20_CHANNEL_START';
export const INIT_ERC20_CHANNEL_FINISH = 'INIT_ERC20_CHANNEL_FINISH'
export const CLOSE_ERC20_CHANNEL = 'CLOSE_ERC20_CHANNEL';

// Verusd Rpc
export const INIT_VRPC_CHANNEL_START = 'INIT_VRPC_CHANNEL_START';
export const INIT_VRPC_CHANNEL_FINISH = 'INIT_VRPC_CHANNEL_FINISH';
export const CLOSE_VRPC_CHANNEL = 'CLOSE_VRPC_CHANNEL';
export const ADD_VRPC_ENDPOINT = 'ADD_VRPC_ENDPOINT';
export const REMOVE_VRPC_ENDPOINT = 'REMOVE_VRPC_ENDPOINT';
export const CLEAR_VRPC_ENDPOINTS = 'CLEAR_VRPC_ENDPOINTS';
export const SET_WATCHED_VRPC_ADDRESSES = 'SET_WATCHED_VRPC_ADDRESSES'

// VerusId information channels
export const INIT_VERUSID_CHANNEL_START = 'INIT_VERUSID_CHANNEL_START';
export const INIT_VERUSID_CHANNEL_FINISH = 'INIT_VERUSID_CHANNEL_FINISH';
export const CLOSE_VERUSID_CHANNEL = 'CLOSE_VERUSID_CHANNEL';
export const SET_WATCHED_VERUSIDS = 'SET_WATCHED_VERUSIDS';
export const SET_PENDING_VERUSIDS = 'SET_PENDING_VERUSIDS';

// General
export const INIT_GENERAL_CHANNEL_START = 'INIT_GENERAL_CHANNEL_START';
export const INIT_GENERAL_CHANNEL_FINISH = 'INIT_GENERAL_CHANNEL_FINISH';
export const CLOSE_GENERAL_CHANNEL = 'CLOSE_GENERAL_CHANNEL';

// Wyre Service Channel
export const INIT_WYRE_COIN_CHANNEL_START = 'INIT_WYRE_COIN_CHANNEL_START';
export const INIT_WYRE_COIN_CHANNEL_FINISH = 'INIT_WYRE_COIN_CHANNEL_FINISH';
export const INIT_WYRE_SERVICE_CHANNEL_START = 'INIT_WYRE_SERVICE_CHANNEL_START';
export const OPEN_WYRE_SERVICE_CHANNEL = 'OPEN_WYRE_SERVICE_CHANNEL';
export const CLOSE_WYRE_COIN_CHANNEL = 'CLOSE_WYRE_COIN_CHANNEL';
export const AUTHENTICATE_WYRE_SERVICE = 'AUTHENTICATE_WYRE_SERVICE';
export const DEAUTHENTICATE_WYRE_SERVICE = 'DEAUTHENTICATE_WYRE_SERVICE';
export const SET_WYRE_ACCOUNT_ID = 'SET_WYRE_ACCOUNT_ID';
export const SET_CURRENT_WYRE_ACCOUNT_DATA = 'SET_CURRENT_WYRE_ACCOUNT_DATA';
export const CLOSE_WYRE_SERVICE_CHANNEL = 'CLOSE_WYRE_SERVICE_CHANNEL';

// Alerts
export const PUSH_ALERT = 'PUSH_ALERT';
export const SHIFT_ALERTS = 'SHIFT_ALERTS';
export const SET_ACTIVE_ALERT = 'SET_ACTIVE_ALERT';

// Modals 
export const PUSH_MODAL = "PUSH_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";

// Notifications
export const ADD_NOTIFICATION_START = "ADD_NOTIFICATION_START"
export const REMOVE_NOTIFICATION_START = "REMOVE_NOTIFICATION_START"
export const CLEAR_NOTIFICATIONS_START = "CLEAR_NOTIFICATIONS_START"
export const ADD_NOTIFICATION_FINISH = "ADD_NOTIFICATION_FINISH"
export const REMOVE_NOTIFICATION_FINISH = "REMOVE_NOTIFICATION_FINISH"
export const CLEAR_NOTIFICATIONS_FINISH = "CLEAR_NOTIFICATIONS_FINISH"
export const CLEAR_ACCOUNT_NOTIFICATIONS_START = "CLEAR_ACCOUNT_NOTIFICATIONS_START"
export const CLEAR_ACCOUNT_NOTIFICATIONS_FINISH = "CLEAR_ACCOUNT_NOTIFICATIONS_FINISH"
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS"

// Widgets
export const ADD_WIDGET_START = "ADD_WIDGET_START"
export const REMOVE_WIDGET_START = "REMOVE_WIDGET_START"
export const ADD_WIDGET_FINISH = "ADD_WIDGET_FINISH"
export const REMOVE_WIDGET_FINISH = "REMOVE_WIDGET_FINISH"
export const CLEAR_WIDGET_FINISH = "CLEAR_WIDGETS_FINISH"
export const CLEAR_ACCOUNT_WIDGETS_START = "CLEAR_ACCOUNT_WIDGETS_START"
export const CLEAR_ACCOUNT_WIDGETS_FINISH = "CLEAR_ACCOUNT_WIDGETS_FINISH"
export const SET_WIDGETS = "SET_WIDGETS"

// Send Coin Modals
export const OPEN_SEND_COIN_MODAL = "OPEN_SEND_COIN_MODAL"
export const CLOSE_SEND_COIN_MODAL = "CLOSE_SEND_COIN_MODAL"
export const SET_SEND_COIN_MODAL_DATA_FIELD = "SET_SEND_COIN_MODAL_DATA_FIELD"
export const SET_SEND_COIN_MODAL_VISIBLE = "SET_SEND_COIN_MODAL_VISIBLE"
export const SET_SEND_COIN_MODAL_SEND_COMPLETED = "SET_SEND_COIN_MODAL_SEND_COMPLETED"

// Loading Modal
export const OPEN_LOADING_MODAL = "OPEN_LOADING_MODAL"
export const CLOSE_LOADING_MODAL = "CLOSE_LOADING_MODAL"

// Secure Loading Modal
export const SET_SECURE_LOADING_SUCCESS_DATA = "SET_SECURE_LOADING_SUCCESS_DATA"
export const SET_SECURE_LOADING_ERROR_DATA = "SET_SECURE_LOADING_ERROR_DATA"
export const CLEAR_SECURE_LOADING_DATA = "CLEAR_SECURE_LOADING_DATA"

// Keyboard
export const SET_KEYBOARD_HEIGHT = "SET_KEYBOARD_HEIGHT"
export const SET_KEYBOARD_ACTIVE = "SET_KEYBOARD_ACTIVE"

// Deep linking
export const SET_DEEPLINK_URL = "SET_DEEPLINK_URL"
export const SET_DEEPLINK_DATA = "SET_DEEPLINK_DATA"
export const SET_DEEPLINK_PASSTHROUGH_DATA = "SET_DEEPLINK_PASSTHROUGH_DATA"

// Personal 
export const SET_PERSONAL_DATA = "SET_PERSONAL_DATA"


// Services
export const SET_SERVICE_STORED_DATA = "SET_SERVICE_STORED_DATA"
export const SET_SERVICE_DATA = "SET_SERVICE_DATA"