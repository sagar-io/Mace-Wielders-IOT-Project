import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const SelectBox = () => {
    const options = [
        { value: 'cow', label: 'Cow' },
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' }
    ]
    return (
        <div>
            <Select
                options={options}
                className='w-96 mb-3 mt-10'
                isMulti
                defaultValue={[options[0]]}
                components={animatedComponents}
            />
            <button className='bg-green-500 py-1 px-4 rounded-md hover:opacity-75'>Save</button>
        </div>
    )
}