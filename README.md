# TradeWise Frontend

## Application Deployment

To run the application, ensure you have `Node.js` version >= 16 installed.

1. **Clone/fork** the current repository
2. **Install dependencies** using `npm ci`
3. **Create a `.env` file** with environment variables based on `.env.sample`
4. **Start the application** with `npm run dev`

---

## Project Structure

The application follows a hybrid architecture combining feature-based organization with layered structure:

```
src/
├── app/                  # Application core configuration
│   ├── providers/        # Global context providers
│   └── store/            # Global state management
├── assets/               # Static assets
├── features/             # Feature modules
├── pages/                # Route entry points
├── shared/               # Reusable infrastructure
└── ...config files
```

### Core Directories

1. **`app/`** - Application core setup:
   - `providers/` - React context providers (Theme, Auth, etc.)
   - `store/` - Global state management (Redux slices, selectors)

2. **`features/`** - Feature modules (domain-driven structure):
   ```bash
   features/
   ├── auth/               # Authentication flows
   ├── trading/            # Trading functionality
   │   ├── dashboard/      # Dashboard feature
   │   │   ├── components/ # Feature-specific components
   │   │   ├── services/   # API/services for the feature
   │   │   └── styles.ts   # Feature-specific styles
   │   └── strategies/     # Trading strategies management
   └── user-profile/       # User profile management
   ```

3. **`pages/`** - Route entry points:
   ```bash
   pages/
   ├── dashboard/          # Dashboard route
   ├── settings/           # Settings route
   └── welcome/            # Landing page
   ```

4. **`shared/`** - Reusable application infrastructure:
   ```bash
   shared/
   ├── api/                # API clients and services
   ├── ui/                 # UI components library
   │   ├── components/     # Reusable components
   │   └── theme/          # Theme configuration
   ├── hooks/              # Custom React hooks
   └── utils/              # Utility functions
   ```

### Key Implementation Details

1. **Component Structure**:
   - Each component has its own directory with:
     - `index.tsx` - Component logic
     - `styles.ts` - Component-specific styles
     - `types.ts` - Type definitions (when needed)

2. **State Management**:
   - Global state in `app/store/`
   - Feature-specific state colocated with features
   - State slices organized by domain (modals, auth, etc.)

3. **Styling Approach**:
   - CSS-in-JS with styled-components
   - Theme provider for design consistency
   - Mobile-first responsive patterns

4. **Routing**:
   - Route guards in `features/auth/routes/`
   - Public/private route separation
   - Lazy loading for code splitting

---

## Development Conventions

1. **Feature Development**:
   - Create new features under `features/` directory
   - Follow `feature-name/components/services/types` structure
   - Colocate test files with components/services

2. **Component Creation**:
   - Use PascalCase for component directories
   - Prefer functional components with TypeScript
   - Separate presentational and container components

3. **State Management**:
   - Use Redux Toolkit for global state
   - Keep feature-specific state local when possible
   - Use hooks for state access (no direct store imports)

4. **Styling Guidelines**:
   - Use theme variables from `shared/constants`
   - Prefer styled-components over inline styles
   - Mobile-first media queries in component styles

---

## Asset Management

1. **Images**:
   - Store in `assets/images/`
   - Optimize for web use (WebP format preferred)
   - Use SVG for icons and logos

2. **Fonts**:
   - Global font definitions in `assets/styles/fonts.css`
   - Font files in `assets/fonts/`

3. **Icons**:
   - SVG icons in `assets/icons/`
   - Use React Icons components when possible

---

This structure promotes:
- Clear separation of concerns
- Reusable and maintainable code
- Scalable feature development
- Consistent team collaboration
- Effective testability