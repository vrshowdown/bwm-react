import {camelCase} from 'camel-case';

let instance = null;

export class Cacher {

  cache = {};

  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  isValueCached(key) {
	//console.log('checking for'+key);
  console.log('value that is cached is '+this.cache[camelCase(key)]);
    return this.getCachedValue(key);
  }

  cacheValue(key, value) {
	//console.log('caching value '+key+ ' '+ value);
    this.cache[camelCase(key)] = value;
	
  }

  getCachedValue(key) {
	//console.log('getting cached value '+ JSON.stringify(  this.cache[camelCase(key)] )  );
    return this.cache[camelCase(key)]; 
  }

}