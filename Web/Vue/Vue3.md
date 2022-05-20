### Vue3学习文档



#### composition api



##### setup

- setup在组件创建之前执行，props解析完成之后作为组合式api的入口

- 找不到组件实例，无法访问this

- setup调用发生在 `data property、computed`或`methods`解析之前，故这些也无法在setup中获取

- ref

  用于在setup中创建响应式变量，return之后可直接作为data数据使用

  ```js
  	export default {
  		setup(props: any, context: any) {
  			const randomNum: any = ref("request msg");
  
  			const getRandom = () => {
  				randomNum.value = Math.random() * 9999;
  			};
  
  			return {
  				getRandom,
  				randomNum,
  			};
  		}
  	};
  ```

- watch

  ```js
  import { reactive, toRefs, ref, onMounted, watch, computed } from "vue";
  
  	// 在 user prop 的响应式引用上设置一个侦听器
  watch(randomNum, (newValue, oldValue) => {
  	console.log("randomNum变化了", oldValue, "-->", newValue);
  });
  ```

- computed

  ```js
  const twiceTheCounter = computed(() => state.counter * 2);
  ```

- toRefs：

  使用 `toRefs` 创建对 props 中的 `user` property 的响应式引用；

  如果需要解构 prop，也可以在 `setup` 函数中使用 [`toRefs`](https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html#响应式状态解构) 函数来完成此操作：

  ```js
  import { toRefs } from 'vue'
  
  setup(props) {
    const { title } = toRefs(props)
  
    console.log(title.value)
  }
  ```

- toRef:

  解构prop中不存在的属性并设定默认值

  ```js
  import { toRef } from 'vue'
  setup(props) {
    const title = toRef(props, 'title')
    console.log(title.value)
  }
  ```

- `<script setup>`

  ```js
  <script setup><script>
    #相当于
  <script lang="js">
      export default {
  		setup(){
              xxxxx
          }
  	}
      
    <script>
  ```

  
