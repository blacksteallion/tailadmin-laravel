# Theme Palette Implementation Plan

## Overview
Add a theme management system that allows admins to define, save, and switch between multiple color palettes. The current hardcoded colors in `resources/css/app.css` become the **default palette**.

---

## 1. Database

### New Table: `theme_palettes`

| Column | Type | Description |
|---|---|---|
| id | bigint, PK | |
| name | varchar(255) | Palette name (e.g. "Default", "Dark Blue", "Sunset") |
| is_active | boolean | Only one palette active at a time |
| colors | json | Full color definitions |
| created_at | timestamp | |
| updated_at | timestamp | |

### `colors` JSON Structure
```json
{
  "brand": {
    "25": "#f2f7ff", "50": "#ecf3ff", "100": "#dde9ff",
    "200": "#c2d6ff", "300": "#9cb9ff", "400": "#7592ff",
    "500": "#465fff", "600": "#3641f5", "700": "#2a31d8",
    "800": "#252dae", "900": "#262e89", "950": "#161950"
  },
  "gray": {
    "25": "#fcfcfd", "50": "#f9fafb", "100": "#f2f4f7",
    "200": "#e4e7ec", "300": "#d0d5dd", "400": "#98a2b3",
    "500": "#667085", "600": "#475467", "700": "#344054",
    "800": "#1d2939", "900": "#101828", "950": "#0c111d"
  },
  "success": {
    "25": "#f6fef9", "500": "#12b76a"
  },
  "error": {
    "25": "#fffbfa", "500": "#f04438"
  },
  "warning": {
    "25": "#fffcf5", "500": "#f79009"
  }
}
```

---

## 2. Backend

### Model: `App\Models\ThemePalette`
- `$casts = ['colors' => 'array', 'is_active' => 'boolean']`
- Scope `active()` — returns the one active palette
- Boot `saved()` event — deactivates all others when `is_active = true`

### Migration
- `2024_xx_xx_create_theme_palettes_table.php`

### Seeder
- `ThemePaletteSeeder` — seeds the **Default** palette with all values from `app.css`

### Controller: `App\Http\Controllers\Admin\ThemePaletteController`
| Method | Route | Action |
|---|---|---|
| `index` | GET `/admin/theme-palettes` | List all palettes |
| `create` | GET `/admin/theme-palettes/create` | Show create form |
| `store` | POST `/admin/theme-palettes` | Store new palette |
| `edit` | GET `/admin/theme-palettes/{id}/edit` | Show edit form |
| `update` | PUT `/admin/theme-palettes/{id}` | Update palette |
| `destroy` | DELETE `/admin/theme-palettes/{id}` | Delete palette |
| `activate` | PATCH `/admin/theme-palettes/{id}/activate` | Set as active |

### Service: `App\Services\ThemeService`
- `getActiveTheme()` — returns active palette or default fallback
- `renderThemeCss()` — generates `<style>` block with CSS custom properties from active palette

---

## 3. Frontend — Theme Management Page

### Route: `/admin/theme-palettes`
- List all palettes in a table with: Name, Active badge, Created date, Actions (Edit, Delete, Activate)
- "Add New Palette" button at top

### Create/Edit Form (`/admin/theme-palettes/create` and `/admin/theme-palettes/{id}/edit`)
- **Name** field (text input)
- **Color pickers** organized by color family in collapsible sections:
  - **Brand** — inputs for brand-25 through brand-950 (12 swatches)
  - **Gray** — inputs for gray-25 through gray-950 (13 swatches)
  - **Semantic** — success-500, error-500, warning-500, orange-500, blue-light-500, theme-pink-500, theme-purple-500
- Each color input uses an HTML5 `<input type="color">` with the hex value displayed alongside
- Preview strip showing the brand gradient
- Submit button

### Wireframe
```
┌─────────────────────────────────────────────────┐
│  Theme Palettes                          [+ Add] │
├─────────────────────────────────────────────────┤
│ ┌─────────┬────────┬──────────┬───────────────┐ │
│ │ Name    │ Active │ Created  │ Actions       │ │
│ ├─────────┼────────┼──────────┼───────────────┤ │
│ │ Default │ ✅     │ Jul 2026 │ Edit  Activate│ │
│ │ Sunset  │ ❌     │ Jul 2026 │ Edit  Activate│ │
│ │ Ocean   │ ❌     │ Jul 2026 │ Edit  Activate│ │
│ └─────────┴────────┴──────────┴───────────────┘ │
└─────────────────────────────────────────────────┘
```

---

## 4. Frontend — Applying Active Theme

### Layout: `resources/views/layouts/app.blade.php`
Inject `<style>` block in `<head>` before the app CSS:

```blade
@php
    $theme = app(\App\Services\ThemeService::class)->getActiveTheme();
@endphp

@if($theme)
<style>
    :root {
        @foreach($theme->colors['brand'] as $shade => $hex)
            --color-brand-{{ $shade }}: {{ $hex }};
        @endforeach
        @foreach($theme->colors['gray'] ?? [] as $shade => $hex)
            --color-gray-{{ $shade }}: {{ $hex }};
        @endforeach
        --color-success-500: {{ $theme->colors['success']['500'] ?? '#12b76a' }};
        --color-error-500: {{ $theme->colors['error']['500'] ?? '#f04438' }};
        --color-warning-500: {{ $theme->colors['warning']['500'] ?? '#f79009' }};
    }
</style>
@endif
```

Tailwind v4 uses CSS variables under the hood (`--color-brand-500`), so overriding them at the `:root` level will cascade to all Tailwind utility classes.

---

## 5. Files to Create / Modify

### New Files
| File | Purpose |
|---|---|
| `database/migrations/xxxx_xx_xx_create_theme_palettes_table.php` | Table schema |
| `database/seeders/ThemePaletteSeeder.php` | Seed default palette |
| `app/Models/ThemePalette.php` | Model |
| `app/Services/ThemeService.php` | Theme logic |
| `app/Http/Controllers/Admin/ThemePaletteController.php` | CRUD controller |
| `resources/views/pages/admin/theme-palettes/index.blade.php` | List page |
| `resources/views/pages/admin/theme-palettes/form.blade.php` | Create/Edit form |

### Modified Files
| File | Change |
|---|---|
| `routes/web.php` | Add admin theme-palette routes |
| `resources/views/layouts/app.blade.php` | Inject active theme CSS variables in `<head>` |
| `app/Helpers/MenuHelper.php` | Add "Theme Palettes" link under admin section (or "Others") |
| `database/seeders/DatabaseSeeder.php` | Call ThemePaletteSeeder |

---

## 6. Implementation Order

1. Create migration and model
2. Create seeder with default palette
3. Run migration + seed
4. Create ThemeService
5. Create ThemePaletteController (full CRUD + activate)
6. Create Blade views (index + form with color pickers)
7. Add routes
8. Update layout to inject active theme CSS
9. Add sidebar menu item
10. Test: switch palettes and verify brand colors change site-wide

---

## 7. Edge Cases & Notes

- **No active palette**: fall back to hardcoded CSS (no override injected)
- **Deleting active palette**: if deleted, automatically activate the most recently updated remaining palette, or fall back to hardcoded
- **Validation**: all hex colors must be valid 6-digit hex; name is required and unique
- **Preview**: the form page should show a live preview strip of the brand gradient as colors are picked
- **Minimal palette**: only brand colors need full scales; semantic colors can default to sensible values if omitted
