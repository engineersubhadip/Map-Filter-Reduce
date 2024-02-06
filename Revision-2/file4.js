// * Numeronyms

// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e


const input = "Every developer likes to mix kubernetes and javascript";

let result = input.split(" ").reduce(function(acc,curr){
    if (curr.length < 4){
        acc  = acc + curr;
    }else{
        let first = curr[0];
        let last = curr[curr.length-1];
        let between = curr.slice(1,curr.length-1);
        // console.log(acc,first,last,between);
        acc = acc + first+last+between.length;
        // console.log(acc);
    }
    acc = acc + " ";
    return acc;
},"");

let result2 = result.split(" ").join(" ");

console.log(result2);