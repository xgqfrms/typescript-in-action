"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-08
 * @modified
 *
 * @description useFetch 自定义 react hooks
 * @augments
 * @example
 * @link
 *
 */

import {
  useEffect,
  useState,
  useRef,
} from "react";

const log = console.log;

const useFetch = (url = ``) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
  });
  useEffect(() => {
    // 取消 promise 请求
    return () => {
      // component unmount
      isCurrent.current = false;
    }
  }, []);
  useEffect(() => {
    setState(state => ({
      data: state.date,
      loading: true,
    }));
    fetch(url)
    .then(res => res.json())
    .then(json => {
      log(`json`, json)
      if(isCurrent.current) {
        setState({
          data: json.date,
          loading: false,
        })
      }
    })
    // clear ?
    return () => {
      cleanup
    }
  }, [url, setState]);
  return state;
}

export default useFetch;

export {
  useFetch,
};
