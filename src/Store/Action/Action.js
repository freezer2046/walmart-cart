
export const APPLYCODE = 'APPLYCODE';
export const applycode = (promocode) => {
    if (promocode === 'DISCOUNT') {
        return {
            type: APPLYCODE,
            discount: 0.9,
        }
    }
    return {
        type: APPLYCODE,
        discount: 1,
    }

}
