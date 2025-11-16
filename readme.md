1. What are some differences between interfaces and types in TypeScript?
Ans: Interface এবং Type দুটোই স্ট্রাকচার ডিফাইন করতে ব্যবহার করা হয়, কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। পার্থক্যগুলো হল-
    ক. Interface শুধু অবজেক্ট স্ট্রাকচার (object, class shape, method signature) ডিফাইন করার জন্য ব্যবহার করা হয়, কিন্তু type দিয়ে আরও অনেক কিছু করা যায়, যেমন primitive, tuple, union ইত্যাদি।
    খ. type বেশি ফ্লেক্সিবল, type দিয়ে যেকোনো কিছু ডিফাইন করা যায়, যেমন string, number, boolean, tuple ইত্যাদি। কিন্তু Interface দিয়ে সরাসরি কোন প্রকার প্রিমিটিভ টাইপ ডিফাইন করা যায় না।
    গ. Interface "Declaration mergin support" করে, অর্থাৎ একই নামে একাধিকবার interface লিখলে তা মার্জ হয়ে যায়।
    ঘ. interface class implementation করার জন্য ideal। Type দিয়েও technically করা যায়, কিন্তু interface বেশি ন্যাচারাল।
    ঙ. Type দিয়ে Complex operations করা যায়, যেমন - Union, Intersection, Mapped types, Conditional Types। কিন্তু interface এইগুলি পারে না।
