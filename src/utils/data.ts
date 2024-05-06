export interface EngineeringOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const engineeringOption: readonly EngineeringOption[] = [
    { value: 'frontend', label: 'Frontend'},
    { value: 'backend', label: 'Backend'},
    { value: 'fullstack', label: 'Fullstack'},
    { value: 'ios', label: 'Ios' },
    { value: 'android', label: 'Android'},
    { value: 'flutter', label: 'Flutter' },
    { value: 'reactnative', label: 'React Native' }
    ];
  
  export interface ProductOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const productOptions: readonly ProductOption[] = [
    { value: 'productManager', label: 'Product Manager' },
    { value: 'tech lead', label: 'Tech Lead' },
  ];
  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  
 
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly EngineeringOption[] | readonly ProductOption[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Engineering',
      options: engineeringOption,
    },
    {
      label: 'Others',
      options: productOptions,
    },
  ];
  