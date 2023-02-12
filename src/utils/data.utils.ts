export const getData =  async <T>(url: string): Promise<T> => {  //Because we are fetching an API that could have any structure but we probably know what it is,
// We use <T> as a generic to indicate we aren't telling what the Promise is returning because it's unknown but we know what it will likely be and will treat it accordingly
//This is necessary for Typescript
    const response = await fetch(url);
    return await response.json();
}