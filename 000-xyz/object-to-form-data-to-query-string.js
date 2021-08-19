const params = {
    creative_id: "4838",
    creative_word_ids: "",
    description: ["zzz", 'abc'],
    title: ["111", '222'],
};

// 1. Object 转 FormData
const formData = new FormData();
// ReferenceError: FormData is not defined ❓ Web API

for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
        for (const item of value) {
            formData.append(key, item);
        }
    } else {
        formData.append(key, value);
    }
}

console.log('formData.toString() =', formData.toString());

for (const [key, value] of formData.entries()) {
    console.log('key, value =', key, value);
}


/*

✅ 实现 重复 key (title / description)

formData.toString() = [object FormData]
key, value = creative_id 4838
key, value = creative_word_ids
key, value = description zzz
key, value = description abc
key, value = title 111
key, value = title 222


*/


// 2. FormData 转 URLSearchParams
const queryString = new URLSearchParams(formData);
console.log('queryString.toString() =', queryString.toString());

for (const [key, value] of queryString.entries()) {
    console.log('key, value =', key, value);
}

/*

✅ 实现 重复 key (title / description)

queryString.toString() = creative_id=4838&creative_word_ids=&description=zzz&description=abc&title=111&title=222
key, value = creative_id 4838
key, value = creative_word_ids
key, value = description zzz
key, value = description abc
key, value = title 111
key, value = title 222

*/

