
export async function bookFetchAPI(bookname){
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${bookname}&startIndex=0&maxResults=20`
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}