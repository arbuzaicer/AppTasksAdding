export class TransformData {

    static BDTransformData(bdData) {
    return Object.keys(bdData).map(el => {
        const single = bdData[el];
        single.id = el;
        return single;
    });
    }
}