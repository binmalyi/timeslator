const Regexes = [/^m(?:illisecond)?s$/i, /^s(?:econds?)?$/i, /^m(?:inutes)?$/i, /^h(?:ours)?$/i];
const formulas = {
    ms_s: (number) => (number / 1000),
    ms_m: (number) => (number / 60000),
    ms_h: (number) => (number / 3600000),
    s_ms: (number) => (number * 1000),
    s_m: (number) => (number / 60),
    s_h: (number) => (number / 3600),
    m_ms: (number) => (number * 60000),
    m_s: (number) => (number * 1000),
    m_h: (number) => (number / 60),
    h_ms: (number) => (number * 3600000),
    h_s: (number) => (number * 3600),
    h_m: (number) => (number * 60)
};

/**
 * @typedef {Object} options
 * @property {string} from
 * @property {string} to
 * @param {Number} time
 * @param {options} option eg. { from: "milliseconds", to: "seconds" }
 * @return {Number}
 */

export function timeslator(time, {from, to}){
    const error = new Error('⛔ No matches were found!');
    const filteredKeys = Object.keys(formulas).filter(property => property.startsWith(from.toLowerCase()[0]));

    if (filteredKeys.length === 0) throw error;

    for (const key of filteredKeys){
        const splitKey = key.split('_');
        let found = true;
        
        for (let _i = 0, size = Regexes.length; _i < size; _i++){
            if (Regexes[_i].test(from) && Regexes[_i].test(splitKey[0])){
                
                for (let _j = 0; _j < size; _j++){
                    if (Regexes[_j].test(to) && Regexes[_j].test(splitKey[1])) return formulas[key](time);
                    if (_j === (size - 1) && !found) break;
                    found = false;
                    continue;
                };
    
            } else {
                if (_i === (size - 1) && !found) break;
                found = false;
                continue;
            };
        };

        if (key === (filteredKeys[filteredKeys.length - 1]) && !found) throw error;
        continue;
    };
};