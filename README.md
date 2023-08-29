## Furrl Assignment

This Project demonstrate the assignment completed for furrl's interview. Here is [link of assignment questionary](https://web.furrl.in/vibeList?vibe=NightFlea)

## Technoloy used

- Next.js
- Typescript
- Tailwind CSS
- Deployment to [Vercel](https://vercel.com/)

```bash
git clone https://github.com/twinkalp10/furrl.git
npm install
npm run dev
```

## Technical Planning

- `vibe.interface.ts` to define all the interfaces
- `vibe.url.ts` to define all fetchers `url`
- `useVibe.tsx` hook to fetch vibe data
- `Vibe.tsx` to display `hero image` and `products list`
- `Product.tsx` to display all the products
  - `ProductCard.tsx` to display product details
  - `ProductLoading.tsx` to display loading skeleton

## Key test cases

- On Scroll, new products are loaded
- Clicking on card opens new page with product details
- Clicking on WishList icon open new page with [wishlist items](https://web.furrl.in/wishlist)
- Clicking on Cart icon open new page with [cart items](https://web.furrl.in/wishlist)

### Additional Information

![ScreenShot of Furrl](/screenshot/FurrlScreenShot.png)
