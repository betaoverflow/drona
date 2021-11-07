import { MAX_OCR_ADDRESS } from "../constants/maxOcrAddress"
import RNFetchBlob from "rn-fetch-blob";

const textFromArray: (inp: [string[]]) => string = (inp) => {
    let res = "";
    for (let i = 0; i < inp.length; i++) {
        res += inp[i] + '\\n';
    }

    return res;
}

export const getTextFromMaxOcr = async (filepath: string) => {
    try {
        const res = await RNFetchBlob.fetch('POST', `${MAX_OCR_ADDRESS}/model/predict`, {
            'Content-Type': 'multipart/form-data'
        }, [
            {name: 'image', filename: 'image.png', data: RNFetchBlob.wrap(filepath)}
        ])

        const ans = JSON.parse(res.data);
        
        const code = textFromArray(ans.text);
        return code;

    } catch(e) {
        console.log(e, ' error sending model data to ocr');
    }
}