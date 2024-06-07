# NuKleus Vue Components Library

The NuKleus Vue Components Library is a collection of reusable Vue components built to adhere to the guidelines and best practices of the NuKleus Design System. These components ensure consistent, accessible, and user-friendly digital experiences across all Vue-based projects within the Independent Society of Knowledge (ISK).

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Components](#available-components)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

The NuKleus Vue Components Library provides a comprehensive set of Vue components designed according to the NuKleus Design System principles. This library enables developers to create consistent and accessible user interfaces for ISK's Vue-based applications efficiently.

## Key Features

- **Consistent Design**: Components adhere to NuKleus Design System guidelines.
- **Accessibility**: Built with inclusive design practices for all users.
- **Reusability**: Easily integrate components across multiple projects.
- **Customization**: Tailor components to fit specific project needs.

## Installation

To use the NuKleus Vue Components Library in your Vue project, install the package via npm:

```sh
npm install @nukleus/vue
```

## Getting Started

Here’s a quick guide to get started with the NuKleus Vue Components Library:

1. **Import the Library**:
    ```js
    import Vue from 'vue';
    import { Button } from '@nukleus/vue';

    Vue.component('Button', Button);
    ```

2. **Use Components in Your Templates**:
    ```html
    <template>
      <div>
        <Button label="Click Me" @click="handleClick" />
      </div>
    </template>

    <script>
    export default {
      methods: {
        handleClick() {
          console.log('Button clicked!');
        }
      }
    };
    </script>
    ```

3. **Explore Documentation**:
   For detailed documentation and usage examples, visit [NuKleus Vue Components Documentation](https://iskportal.com/nukleus-vue-docs).

## Available Components

The library includes a wide range of components such as:

- Buttons
- Form Inputs
- Modals
- Tabs
- Tooltips
- And more...

Check out the full list of components and their usage in the [component documentation](https://iskportal.com/nukleus-vue-docs).

## Contributing

We welcome contributions to the NuKleus Vue Components Library! To contribute:

- **Read our Contribution Guidelines**: [Contribution Guidelines](https://iskportal.com/collab)
- **Submit Issues and Pull Requests**: Contributions should be submitted through GitHub.
- **Contact Us**: For major changes or ideas, email us at [projects@iskportal.com](mailto:projects@iskportal.com).

## Support

For support and inquiries, please contact us at [contact@iskportal.com](mailto:contact@iskportal.com).

## License

NuKleus Vue Components Library is licensed under the GPLv2.0 License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

This library is part of the NuKleus Design System and builds upon the principles of IBM's Carbon Design System. We extend our gratitude to the Carbon Design System team for their foundational work.

---

**ISK Website**: [iskportal.com](https://iskportal.com)

**NuKleus Documentation**: [NuKleus Vue Components Documentation](https://iskportal.com/nukleus-vue-docs)
