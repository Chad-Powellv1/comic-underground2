import * as uiService from './ui';
import * as storageService from './storage';
import * as STORAGE_KEYS from '../constants/storage';

export const remove = item => {
    let watchlist = JSON.parse(storageService.get(STORAGE_KEYS.WATCHLIST));
    if (!watchlist || !watchlist.length) return;
    watchlist = watchlist.filter(watchlistItem => watchlistItem.id !== item.id);
    storageService.save({ key: STORAGE_KEYS.WATCHLIST, payload: JSON.stringify(watchlist) });
  };

export const addToWatchlist = item => {
    if (!item) return;
    const watchlist = JSON.parse(storageService.get(STORAGE_KEYS.WATCHLIST));
    if (watchlist && watchlist.length) {
        updateWatchlist(watchlist, item);
    } else {
        createWatchlist(item);
    }
    uiService.alert('Item added to watchlist');
};

const updateWatchlist = (watchlist, item) => {
    if (!watchlist || !watchlist.length || !item) return;
    for (const watchlistItem of watchlist) {
        if (watchlistItem.id === item.id) {
            uiService.alert('The item was updated');
            return;
        }
    }
    watchlist.push(item)
    storageService.save({ key: STORAGE_KEYS.WATCHLIST, payload: JSON.stringify(watchlist) });
};

const createWatchlist = item => {
    storageService.save({ key: STORAGE_KEYS.watchlist, payload: JSON.stringify([item]) });
};