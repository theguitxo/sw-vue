import dataUtils from '@/utils/data';
import fileConstants from '@/constants/file';
import apiConstants from '@/constants/api';

const {
  loadMultipleData,
} = dataUtils;

// file constants
const {
  MUTATIONS,
  ACTIONS,
  EXTRA_KEYS,
} = fileConstants;

const {
  RESET_DATA,
  LOAD_ITEM_INFO,
} = ACTIONS;

// api constants
const {
  OPTIONS,
} = apiConstants;

const extraDataKeys = {
  [OPTIONS.FILMS]: [
    EXTRA_KEYS.CHARACTERS,
    EXTRA_KEYS.PLANETS,
    EXTRA_KEYS.STARSHIPS,
    EXTRA_KEYS.VEHICLES,
    EXTRA_KEYS.SPECIES,
  ],
  [OPTIONS.PEOPLE]: [
    EXTRA_KEYS.FILMS,
    EXTRA_KEYS.SPECIES,
    EXTRA_KEYS.VEHICLES,
    EXTRA_KEYS.STARSHIPS,
    EXTRA_KEYS.HOMEWORLD,
  ],
  [OPTIONS.PLANETS]: [
    EXTRA_KEYS.RESIDENTS,
    EXTRA_KEYS.FILMS,
  ],
  [OPTIONS.SPECIES]: [
    EXTRA_KEYS.PEOPLE,
    EXTRA_KEYS.FILMS,
    EXTRA_KEYS.HOMEWORLD,
  ],
  [OPTIONS.STARSHIPS]: [
    EXTRA_KEYS.PILOTS,
    EXTRA_KEYS.FILMS,
  ],
  [OPTIONS.VEHICLES]: [
    EXTRA_KEYS.PILOTS,
    EXTRA_KEYS.FILMS,
  ],
};

async function getExtraData(data, keys) {
  return Promise.all(keys.map(async (key) => {
    const list = Array.isArray(data[key]) ? data[key] : [data[key]];
    const result = await loadMultipleData(list);
    return result;
  })).then((results) => {
    const final = {};
    keys.forEach((element, index) => {
      final[`${element}.data`] = results[index].map(item => item.data);
    });
    return final;
  });
}

async function loadItemInfo({ commit }, params) {
  const {
    data,
    option,
  } = params;
  try {
    const extraData = await getExtraData(data, extraDataKeys[option]);
    commit(MUTATIONS.SET_DATA, Object.assign(data, extraData));
  } catch (error) {
    throw (error);
  }
}

function resetData({ commit }) {
  commit(MUTATIONS.SET_DATA, null);
}

export default {
  [RESET_DATA]: resetData,
  [LOAD_ITEM_INFO]: loadItemInfo,
};
