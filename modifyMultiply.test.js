const modifyMultiply = require('./modifyMultiply')

describe('modifyMultiply', () => {
  it('works for a single input', () => {
    expect(modifyMultiply("string",0,1)).toEqual("string")
  })
  it('works for a longer input', () => {
    expect(modifyMultiply("hello world",0,1)).toEqual("hello")
  })
  it('works for an even longer input', () => {
    expect(modifyMultiply("This is a string",0,1)).toEqual("This")
  })
  it('works for an even longer input with repeated word at later index', () => {
    expect(modifyMultiply("This is a string",1,1)).toEqual("is")
  })
  it('works for an even longer input with repeated word at later index pt2', () => {
    expect(modifyMultiply("This is a string",3,1)).toEqual("string")
  })
  it('works joins output with hyphen', () => {
    expect(modifyMultiply("This is a string",3,2)).toEqual("string-string")
  })

})

  // Test.assertEquals(modifyMultiply("This is a string",3 ,5), "string-string-string-string-string", "The string is incorrect");
  // Test.assertEquals(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), "that-that-that-that-that-that-that-that-that-that");
  // Test.assertEquals(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1), "means");
  // Test.assertEquals(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
  // Test.assertEquals(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around");