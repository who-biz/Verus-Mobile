import { getSynchronizerInstance, InitializerConfig, makeSynchronizer, stopAndDeleteWallet, Tools } from 'react-native-verus'
import { VRSC_SAPLING_ACTIVATION_HEIGHT, PBAAS_SAPLING_ACTIVATION_HEIGHT } from '../../../../constants/constants'
import { DLIGHT_PRIVATE } from '../../../../constants/intervalConstants'

/**
 * Initializes a wallet for the first time
 * @param {String} coinId The chainticker to create a light wallet client for
 * @param {String} coinProto The protocol the coin is based on (e.g. 'btc' || 'vrsc')
 * @param {String} accountHash The account hash of the user account to create the wallet for
 * @param {String} host The host address for the lightwalletd server to connect to
 * @param {Integer} port The port of the lightwalletd server to connect to
 * @param {String} seed The HDSeed for the wallet in question (can be omitted if extsk is present)
 * @param {String} extsk An Extended Spending Key for the wallet in question (can be omitted if seed present)
 * @param {Boolean} scanFromTip Whether to scan from tip (latest checkpoint presently), or full scan
 */
export const initializeWallet = async (coinId, coinProto, accountHash, host, port, seed, extsk, scanFromTip) => {
     try {
       const config = await setConfig(coinId, coinProto, accountHash, host, port, seed, extsk, true, scanFromTip);
       const sync = await makeSynchronizer(config);
       return sync;
     } catch (error) {
       throw error;
     }
};

export const setConfig = async (coinId, coinProto, accountHash, host, port, seed, extsk, newWallet, scanFromTip) => {
    /**
     * @type {InitializerConfig}
     */
    const birthday = scanFromTip ? 4050000 : VRSC_SAPLING_ACTIVATION_HEIGHT;
    const config = {
      mnemonicSeed: seed,
      extsk: extsk ? await Tools.bech32Decode(extsk) : extsk,
      defaultHost: host,
      defaultPort: port,
      wif: "",
      networkName: coinId,
      alias: accountHash,
      birthdayHeight: birthday,
      newWallet: newWallet
    }
    return config;
}

/**
 * Opens a wallet that has been created before
 * @param {String} coinId The chainticker to create a light wallet client for
 * @param {String} coinProto The protocol the coin is based on (e.g. 'btc' || 'vrsc')
 * @param {String} accountHash The account hash of the user account to create the wallet for
 * @param {String} host The host address for the lightwalletd server to connect to
 * @param {Integer} port The port of the lightwalletd server to connect to
 * @param {String} seed The HDSeed for the wallet in question (can be omitted if extsk is present)
 * @param {String} extsk An Extended Spending Key for the wallet in question (can be omitted if seed present)
 * @param {Boolean} scanFromTip Whether to scan from tip (latest checkpoint presently), or full scan
 */
export const openWallet = async (coinId, coinProto, accountHash, host, port, seed, extsk, scanFromTip) => {
  try {
    const config = await setConfig(coinId, coinProto, accountHash, host, port, seed, extsk, false, scanFromTip);
    const sync = await makeSynchronizer(config);
    return sync;

  } catch (error) {
    throw error
  }
}

/**
 * Closes a wallet that is no longer in use, without deleting its database data (blocks, etc.)
 * @param {String} coinId The chainticker to create a light wallet client for
 * @param {String} coinProto The protocol the coin is based on (e.g. 'btc' || 'vrsc')
 * @param {String} accountHash The account hash of the user account to create the wallet for
 */
export const closeWallet = (coinId, accountHash, coinProto) => {
  return new Promise((resolve, reject) => {
    try {
      const synchronizer = getSynchronizerInstance(accountHash, coinId);
      resolve(synchronizer.stop());
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Deletes a wallet by closing it and deleting all of its data 
 * @param {String} coinId The chainticker to create a light wallet client for
 * @param {String} coinProto The protocol the coin is based on (e.g. 'btc' || 'vrsc')
 * @param {String} accountHash The account hash of the user account to create the wallet for
 */
export const eraseWallet = (coinId, accountHash, coinProto) => {
  return new Promise((resolve, reject) => {
     try {
       const synchronizer = getSynchronizerInstance(accountHash, coinId);
       resolve(synchronizer.stopAndDeleteWallet(accountHash, coinId))
     } catch (error) {
       reject(error);
     }
  });
};
