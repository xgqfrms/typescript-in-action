const params = {
    creative_id: "4838",
    creative_word_ids: "",
    description: ["zzz", 'abc'],
    title: ["111", '222'],
};
// 1. 直接 Object 转 URLSearchParams ❌
const queryString = new URLSearchParams();
for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
        for (const item of value) {
            queryString.set(key, item);
        }
    } else {
        queryString.set(key, value);
    }
}

console.log('queryString.toString() =', queryString.toString());

for (const [key, value] of queryString.entries()) {
    console.log('key, value =', key, value);
}


/*

❌ 无法实现 重复 key (title / description)

queryString.toString() = creative_id=4838&creative_word_ids=&description=abc&title=222
key, value = creative_id 4838
key, value = creative_word_ids
key, value = description abc
key, value = title 222


*/

