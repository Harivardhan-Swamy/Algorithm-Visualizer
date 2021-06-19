export function getMergeSortAnimations(array) {

    const animations = [];
    if(array.length <= 1) return array;
    const auxiliary = array.slice();
    MergeSortHelper(array, 0, array.length - 1, auxiliary, animations);
    return animations;

}

function MergeSortHelper(mainArray, start, end, auxiliary, animations) {

    if(start == end) return;
    let middle = Math.floor((start + end)/2);
    MergeSortHelper(auxiliary, start, middle, mainArray, animations);
    MergeSortHelper(auxiliary, middle+1, end, mainArray, animations);
    doMergeSort(mainArray, start, middle, end, auxiliary, animations);

}

function doMergeSort(mainArray, start, middle, end, auxiliary, animations) {


    let i = start;
    let k = start;
    let j = middle + 1;
    
    

    while(i <= middle && j <= end) {

        if(typeof(animations) != undefined) {
            
            animations.push([i,j]);
            animations.push([i,j]);
        }
        

        if(auxiliary[i] < auxiliary[j]) {

            if(typeof(animations) != undefined) {
                animations.push([k, auxiliary[i]]);
            }
            
            mainArray[k++] = auxiliary[i++];

        } 
        else {

            if(typeof(animations) != undefined) {
                animations.push([k, auxiliary[j]]);
            }
            
            mainArray[k++] = auxiliary[j++];

        }

    }

    while(i <= middle) {

        if(typeof(animations) != undefined) {
            animations.push([i,i]);
            animations.push([i,i]);
            animations.push([k, auxiliary[i]]);
        }
        
        mainArray[k++] = auxiliary[i++];

    }

    while(j <= end) {

        if(typeof(animations) != undefined) {
            animations.push([j,j]);
            animations.push([j,j]);
            animations.push([k, auxiliary[j]]);
        }
        
        mainArray[k++] = auxiliary[j++];

    }

}