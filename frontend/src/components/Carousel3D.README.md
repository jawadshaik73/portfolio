# Cylindrical 3D Rotating Carousel Component

A premium interactive carousel component featuring 3D cylindrical rotation, glassmorphism effects, motion blur, and smooth cursor-based interactions.

## Features

✨ **3D Effects**
- Cylindrical perspective with `transform: rotateY`
- Auto-rotation and drag-to-rotate interaction
- Depth shadow effects for realism
- Cursor-based tilt animation

🎨 **Styling**
- Glassmorphism design with backdrop blur
- Motion blur animation overlays
- Smooth cubic-bezier easing transitions
- Responsive design (mobile, tablet, desktop)

⚡ **Interactions**
- Auto-rotation (0.5deg per frame)
- Drag-based manual rotation
- Cursor-tracking tilt effect
- Smooth animations with custom easing

## Usage

```jsx
import Carousel3D from './components/Carousel3D';

// Basic usage with default items
<Carousel3D />

// With custom items
<Carousel3D items={[
  {
    title: "Project Title",
    description: "Short description",
    image: "https://example.com/image.jpg",
    tags: ["React", "3D CSS"]
  },
  // ... more items
]} />
```

## Props

### `items` (Array, Optional)
An array of carousel item objects with the following structure:

```javascript
{
  title: string,           // Card title
  description: string,     // Card subtitle/description
  image: string,          // Image URL
  tags: string[]          // Array of technology tags
}
```

If not provided, the carousel will render 6 placeholder items.

## Customization

### Colors & Glassmorphism
Edit `Carousel3D.css` to modify:
- `background: rgba(255, 255, 255, 0.1)` - Card background opacity
- `backdrop-filter: blur(15px)` - Blur intensity
- `border: 1px solid rgba(255, 255, 255, 0.2)` - Border color

### 3D Perspective
- `.carousel-cylinder` - Adjust `width` and `height` for size
- `translateZ(400px)` - Modify depth distance
- `rotateY()` - Change rotation axis

### Animation Timing
- `transition: transform 0.016s cubic-bezier(0.34, 1.56, 0.64, 1)` - Easing function
- Auto-rotation interval: `0.5 degrees per 50ms`
- Motion blur duration: `2s` (adjust in `@keyframes motionBlur`)

### Responsive Breakpoints
- Tablet (768px): Smaller dimensions
- Mobile (480px): Minimal layout

## Browser Support

- Modern browsers with CSS 3D Transforms support
- Chrome/Edge 26+
- Firefox 10+
- Safari 9+

## Performance Optimization

- Uses `transform-style: preserve-3d` for GPU acceleration
- `backface-visibility: hidden` prevents flickering
- `will-change` can be added for further optimization
- Smooth 60fps animations with cubic-bezier easing

## Animation Details

### Auto-rotation
Runs continuously when not dragging, rotating the cylinder at 0.5° per frame.

### Drag Interaction
- Mouse down to start dragging
- Drag distance multiplied by 0.5 for smooth control
- 50px drag = 25° rotation

### Cursor Tilt
- Responds to mouse position within container
- Maximum ±10° tilt on X and Y axes
- Spring animation for natural feel

### Motion Blur
Animates a linear gradient overlay to simulate motion blur effect.

## CSS Variables Used

```css
--primary: #00d2ff  /* Accent color for tags and focus ring */
```

Modify in your main CSS file to match your brand colors.

## Example Implementation

```jsx
const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400",
    tags: ["React", "MongoDB", "Node.js", "Stripe"]
  },
  {
    title: "AI Chat Application",
    description: "Real-time messaging with AI integration",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400",
    tags: ["Python", "WebSocket", "NLP"]
  },
  // ... more items
];

export default function Portfolio() {
  return <Carousel3D items={portfolioItems} />;
}
```

## Troubleshooting

### Cards not rotating smoothly
- Check that `perspective: 1200px` is set on parent
- Ensure `transform-style: preserve-3d` is on cylinder

### Drag interaction not working
- Verify mouse event handlers are attached to container
- Check z-index layering with other elements

### Motion blur not visible
- Increase `backdrop-filter: blur()` value
- Reduce `animation: motionBlur` duration for faster effect

### 3D effect not visible
- Enable 3D Transforms in browser settings
- Use browser DevTools to check `transform` values

## Performance Tips

1. **Lazy load images** - Use image optimization libraries
2. **Reduce item count** - 6-8 items is optimal
3. **Optimize images** - Use WebP format with fallbacks
4. **Use CSS containment** - Add `contain: layout paint` to `.glass-card`
5. **Preload images** - Load images before carousel mounts

## License

Part of your portfolio website - Feel free to customize and use!
