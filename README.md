# Demo React Query

## Vite.js

Project setup with [Vite.js](https://vitejs.dev/)

```
npm init @vitejs/app
```

or

```
npm init @vitejs/app -- --template react-ts
```

## React Query

### Provider

```tsx
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;
```

### useQuery

```tsx
const { isLoading, isError, data } = useQuery("ordersData", () =>
  fetch("http://localhost:3003/orders").then((res) => res.json())
);
```
