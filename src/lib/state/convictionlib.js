export const getConviction = (a, D, y0, x, t) => {
    let y = y0 * a ** t + (x * (1 - a ** t)) / (1 - a);
    return y;
}

// see https://docs.google.com/spreadsheets/d/1-fXCvxJgUP__f7GKVVKEvySqFQwi7hzH3xuwt7UMc_g/edit#gid=1464839557
// Ymax*(r/beta)^kappa+Tmin
// Ymax	3000000000
// Beta = 	0.32
// r = Ac/C
// Kappa = 1.9
// Tmin	= 3000000

export const getTriggerVal = (Ac,C) => {
    if (C===0){
        return NaN;
    }
    const yMax = 3000000000;
    const beta = 0.32;
    const r = Ac/C;
    const kappa = 1.9;
    const tMin = 3000000;

    return yMax*(r/beta)*kappa+tMin;

}