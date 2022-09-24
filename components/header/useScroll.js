import navItems from './navItems';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useScroll = () => {
  const [acrollDown, setScrollDown] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter()
  const { pathname } = useRouter();


 
  const newNavItems = [];
  navItems.map((item) => {
    if (item.children) {
      item.children.map((it) => {
        return newNavItems.push(it);
      });
    } else {
      return newNavItems.push(item);
    }
    return item;
  });
  useEffect(() => {
    const scrollListener = (e) => {
      const down = e.deltaY;
      console.log(e.deltaY);
      if (down < 0) {
        setScrollTop((prev) => {
          if (prev <= -222) {
            let nextPath = 1;
            newNavItems?.forEach((item, index) => {
              if (item.path === pathname) {
                nextPath = index;
              }
            });
            while (nextPath < newNavItems.length && nextPath !== 0) {
              router.push(newNavItems[nextPath - 1].path);
              return 0;
            }
            router.push(newNavItems[newNavItems.length - 1]?.path);
            return 0;
          }
          return prev + down;
        });
      } else {
        setScrollDown((prev) => {
          if (prev >= 222) {
            let previousPath;
            newNavItems?.forEach((item, index) => {
              if (item.path === pathname) {
                previousPath = index;
              }
            });
        
            while (previousPath < newNavItems.length - 1) {
              router.push(newNavItems[previousPath + 1]?.path);
              return 0;
            }
            router.push(`${newNavItems[0].path}`);
            return 0;
          }
          console.log(22222);
          return prev + down;
        });
      }
    };
      window.addEventListener('wheel', scrollListener);

      return () => {
        window.removeEventListener('wheel', scrollListener);
      };
    }, [acrollDown,scrollTop,pathname]);
};
