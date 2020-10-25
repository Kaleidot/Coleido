import 'lodash.multipermutations';
import _ from 'lodash';
import * as params from './RgbParamters';

class RgbCalculator {
    constructor() {
        this.rawColourTargets = this.calculateTargets();
    }

    calculateSingleColourValues () {
        let singleColourVales = [];
        for (let index = 1; index <= params.MAXSTEPS; index++) {
            let singleColourValue = index * params.COMMONDIFFERENCE;
            singleColourVales.push(singleColourValue);
        }
        return singleColourVales;
    }

    calculateTargets() {
        let singleColourArray = this.calculateSingleColourValues();
        var targets = _(singleColourArray).multipermutations(params.COLOURlEN).map(v => _.join(v, ',')).value();
        return targets;
    }

    categoriseColourVectors (categories) {
        let commonMultiple = this.rawColourTargets.length /categories;
        let slicedColourVectors = this.sliceColourVectorTargets(commonMultiple);
        let categorisedColourVectors = [];
        let singleCategorisedColourVectors;
        let categoriseCount;
        let categoryIndex = 0;
        while(categoryIndex < categories){
            categoriseCount = 0;
            singleCategorisedColourVectors = [];
            while (categoriseCount < (commonMultiple / categories)) {
                let index = categoryIndex + categories * categoriseCount;
                singleCategorisedColourVectors.push(slicedColourVectors[index]);
                categoriseCount++;
            }
            categorisedColourVectors.push(singleCategorisedColourVectors);
            categoryIndex++;
        }
        return categorisedColourVectors;
    }

    convertToColourVector = (stringArray) => {
        let values = stringArray.split(',');
        var colourVector = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
        return colourVector;
    }

    generateRandomColourIndex = (min, max) => {
        let randomNumber = _.random(min, max);
        var colourIndex = this.rawColourTargets[randomNumber];
        return colourIndex;
    }

    generateRandomColourIndexList = (min, max, len) => {
        let colourIndexes = [];
        let value;
        for (let index = 0; index <= len; index++) {
            value = this.generateRandomColourIndex(min, max);
            colourIndexes.push(value);
        }
        return colourIndexes;
    }

    sliceColourVectorTargets(colourGroups) {
        var colourVectorTargets = [];
        let totalTargets = this.rawColourTargets.length;
        let commonMultiple = Math.floor( totalTargets / colourGroups);
        for (let index = 0; index < colourGroups; index++){
            let startIndex = index * commonMultiple;
            let endIndex = (index + 1) * commonMultiple;
            let slicedTargets = [];
            if (endIndex <= totalTargets){
                 slicedTargets = this.rawColourTargets.slice(startIndex, endIndex);
            } else {
                slicedTargets = this.rawColourTargets.slice(startIndex, endIndex);
            }
            colourVectorTargets.push(slicedTargets);
        }
        return colourVectorTargets;
    }
}

export default RgbCalculator;